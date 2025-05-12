import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getCurrentDayTime } from 'src/shared/utils/get-day.util';
import { PrismaService } from '../prisma/prisma.service';
import { SaveGenerateDto } from './dto/create-generate.dto';
import { QueryGenerateDto } from './dto/query-generate.dto';

@Injectable()
export class GenerateService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async getGenerateRecordDetailCount(userId: string) {
    return this.prismaService.generateRecordDetail.count({
      where: { generateRecord: { userId } },
    });
  }

  async getGenerateRecordDetailList(queryGenerateDto: QueryGenerateDto) {
    const { userId, page, pageSize } = queryGenerateDto;
    return this.prismaService.generateRecordDetail.findMany({
      where: { generateRecord: { userId } },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        createdTime: 'desc',
      },
    });
  }

  async createGenerate(saveGenerateDto: SaveGenerateDto) {
    const {
      userId,
      resumeId,
      status,
      url = '',
      title = Date.now().toString(),
    } = saveGenerateDto;
    const currentDayTime = getCurrentDayTime();
    return this.prismaService.generateRecord.create({
      data: {
        userId,
        resumeId,
        times: 1,
        date: currentDayTime,
        generateRecordDetail: {
          create: {
            title,
            url,
            status,
          },
        },
      },
      include: {
        generateRecordDetail: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  async updateGenerate(detailId: string, saveGenerateDto: SaveGenerateDto) {
    const { id, url = '', status } = saveGenerateDto;
    const record = await this.prismaService.generateRecord.findUnique({
      where: { id },
    });
    if (!record) {
      return;
    }

    return this.prismaService.generateRecord.update({
      where: { id: record.id },
      data: {
        times: {
          increment: 1,
        },
        generateRecordDetail: {
          update: {
            where: { id: detailId },
            data: {
              url,
              status,
            },
          },
        },
      },
    });
  }

  async checkGenerateLimit(userId: string, date: number) {
    const data = await this.prismaService.generateRecord.findFirst({
      where: { userId, date },
    });

    if (!data || !data.times) return true;

    const limit = Number(
      this.configService.getOrThrow<string>('PER_DAY_GENERATE_LIMIT'),
    );
    if (data.times >= Number(limit)) {
      return false;
    }
    return true;
  }
}
