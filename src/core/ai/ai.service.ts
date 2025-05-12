import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { getCurrentDayTime } from 'src/shared/utils/get-day.util';
import { PrismaService } from '../prisma/prisma.service';
import { SaveAiContentDto } from './dto/save-ai-content.dto';
import { SaveAiDto } from './dto/save-ai.dto';

@Injectable()
export class AiService {
  openai: OpenAI;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.initOpenAi();
  }

  initOpenAi() {
    this.openai = new OpenAI({
      // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
      apiKey: this.configService.getOrThrow<string>('AI_API_KEY'), // 如何获取API Key：https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key
      baseURL: this.configService.getOrThrow<string>('AP_API_URL'),
    });
  }

  async checkAiLimit(userId: string) {
    const currentDay = getCurrentDayTime();
    const data = await this.prismaService.aIGenerator.findFirst({
      where: { userId, date: currentDay },
      select: { times: true },
    });
    const limit = Number(
      this.configService.getOrThrow<string>('PER_DAY_AI_LIMIT'),
    );
    if (!data?.times) return true;
    if (data?.times >= limit) {
      return false;
    }
    return true;
  }

  async generateContent(userId: string, content: string) {
    console.log(userId, content);
    const completion = await this.openai.chat.completions.create({
      model: 'qwen-plus', // 模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
      messages: [
        {
          role: 'user',
          content: `
            用户目前在创建简历，现在希望根据个人情况来创建个人优势的内容，这是用户的需求：${content}。
            请根据用户的情况，生成4-6段，每段在20-35字的个人优势，如果用户有字数和段落的需求时，就以用户的需求为准。
            生成结果直接要用户需要的主题内容，不用把提的要求加上去。
          `,
        },
      ],
    });
    const userMessage = completion.choices[0].message.content;
    await this.saveGenerate(
      { userId },
      {
        desc: content,
        // 模型生成的id
        gid: completion.id,
        // 模型类型
        model: completion.model,
        // 提问消耗的token
        promptTokens: completion.usage?.prompt_tokens as number,
        // 完成消耗的token
        completionTokens: completion.usage?.completion_tokens as number,
        // 模型的对象类型
        object: completion.object,
        userMessage: userMessage as string,
      },
    );
    return userMessage;
  }

  async saveGenerate(saveAiDto: SaveAiDto, saveAiContentDto: SaveAiContentDto) {
    const { userId } = saveAiDto;
    const currentDay = getCurrentDayTime();
    const data = await this.prismaService.aIGenerator.findFirst({
      where: { userId, date: currentDay },
      select: { id: true },
    });
    if (data) {
      return this.prismaService.aIGenerator.update({
        where: { id: data.id },
        data: {
          times: { increment: 1 },
          aiGenerateContent: {
            create: {
              ...saveAiContentDto,
            },
          },
        },
      });
    }
    return this.prismaService.aIGenerator.create({
      data: {
        userId,
        times: 1,
        date: currentDay,
        aiGenerateContent: {
          create: {
            ...saveAiContentDto,
          },
        },
      },
    });
  }
}
