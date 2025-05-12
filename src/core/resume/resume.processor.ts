import { Processor, Process } from '@nestjs/bull';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import puppeteer, { Browser } from 'puppeteer';
import { ResumeGenerateStatus } from 'src/shared/enums/resume';
import { GenerateService } from '../generate/generate.service';
import { LoggerService } from '../logger/logger.service';
import { QiniuService } from '../qiniu/qiniu.service';
import { GenerateDto } from './dto/generator.dto';

@Processor('resume') // 队列名字
export class ResumeProcessor implements OnModuleInit, OnModuleDestroy {
  static BROWER: Browser;
  constructor(
    private readonly qiniuService: QiniuService,
    private readonly generateService: GenerateService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService,
  ) {}
  onModuleInit() {
    // throw new Error('Method not implemented.');
  }

  onModuleDestroy() {
    void ResumeProcessor.BROWER?.close();
  }

  @Process({ name: 'generate', concurrency: 2 }) // 任务名
  async handleGenerate(job: Job<GenerateDto>) {
    console.log('处理生成简历任务:', job.data);
    // 在这里执行 puppeteer 简历生成
    await this.generatePDF(job.data).catch((err) => {
      this.loggerService.error(err);
      throw err;
    });
    console.log('简历生成完成:', job.data);
  }

  async generatePDF(generateDto: GenerateDto) {
    const { id, userId, title } = generateDto;
    console.log('generateDto', generateDto);
    const generateData = await this.generateService.createGenerate({
      userId,
      resumeId: id,
      title,
      url: '',
      status: ResumeGenerateStatus.START,
    });
    const generateRecordDetailId = generateData.generateRecordDetail[0].id;
    try {
      const pdfBuffer = await this.startGenerate(generateDto);
      const data = (await this.qiniuService.uploadFileByBuffer(
        Buffer.from(pdfBuffer),
      )) as { key: string };
      await this.generateService.updateGenerate(generateRecordDetailId, {
        id: generateData.id,
        userId,
        resumeId: id,
        url: data.key,
        status: ResumeGenerateStatus.SUCCESS,
      });
    } catch (err) {
      await this.generateService.updateGenerate(generateRecordDetailId, {
        id: generateData.id,
        userId,
        resumeId: id,
        status: ResumeGenerateStatus.FAIL,
      });
      this.loggerService.error(err);
    }
    // 设置响应头，确保客户端能够识别为PDF文件
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
    // res.send(pdfBuffer); // 发送二进制流
  }

  async startGenerate(generateDto: GenerateDto) {
    const { id, type, userId, token } = generateDto;
    if (!ResumeProcessor.BROWER || !ResumeProcessor.BROWER.connected) {
      ResumeProcessor.BROWER = await puppeteer.launch({
        headless: true,
        // executablePath:
        //   this.configService.getOrThrow<string>('CHROMIUM_LOCATION'),
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }
    const page = await ResumeProcessor.BROWER.newPage();

    // 打开网页
    await page.goto(
      `http://resume.iamcola.cc/temp?compName=${type}&id=${id}&userId=${userId}`,
      {
        waitUntil: 'networkidle0', // 等待页面加载完成
        timeout: 50 * 1000,
      },
    );
    await page.evaluate((token) => {
      window['TOKEN_FROM_PUPPETEER'] = token;
    }, token);
    // await new Promise((resolve) => setTimeout(resolve, 1000)); // 假装生成

    await page.waitForSelector('#loaded-core');
    // 生成 PDF，设置为 A4 纸张大小
    const data = await page.pdf({
      // path: 'example.pdf', // 输出文件路径
      format: 'A4', // 设置为 A4 大小
      printBackground: true, // 是否打印背景图像
      scale: 1,
      margin: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      }, // 设置边距
    });

    await new Promise((resolve) => setTimeout(() => resolve(null), 10 * 1000));

    await page.close();
    return data;
  }
}
