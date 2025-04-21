import { Processor, Process } from '@nestjs/bull';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Job } from 'bull';
import puppeteer, { Browser } from 'puppeteer-core';
import { QiniuService } from '../qiniu/qiniu.service';

@Processor('resume') // 队列名字
export class ResumeProcessor implements OnModuleInit, OnModuleDestroy {
  static BROWER: Browser;
  constructor(private readonly qiniuService: QiniuService) {}
  onModuleInit() {
    // throw new Error('Method not implemented.');
  }

  onModuleDestroy() {
    void ResumeProcessor.BROWER?.close();
  }

  @Process({ name: 'generate', concurrency: 2 }) // 任务名
  async handleGenerate(job: Job) {
    console.log('处理生成简历任务:', job.data);

    // 在这里执行 puppeteer 简历生成
    await this.generatePDF();

    console.log('简历生成完成:', job.data);
  }

  async generatePDF() {
    const start = async () => {
      // Launch the browser and open a new blank page
      if (!ResumeProcessor.BROWER || !ResumeProcessor.BROWER.connected) {
        ResumeProcessor.BROWER = await puppeteer.launch({
          headless: false,
          executablePath:
            'C:/Program Files/Google/Chrome/Application/chrome.exe',
          // args: ['--window-size=1920,1080'],
        });
      }
      const page = await ResumeProcessor.BROWER.newPage();

      // 设置正确的桌面端环境
      await page.setViewport({
        // width: 794,
        // height: 1123,
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2, // 标准缩放
      });

      // 打开网页
      await page.goto('http://iamcola.cc/article', {
        waitUntil: 'networkidle0', // 等待页面加载完成
      });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 假装生成

      // 生成 PDF，设置为 A4 纸张大小
      const data = await page.pdf({
        path: 'example.pdf', // 输出文件路径
        format: 'A4', // 设置为 A4 大小
        printBackground: true, // 是否打印背景图像
        preferCSSPageSize: true, // <<<<<<<< 非常重要！
        scale: 2, // 更清晰
        margin: {
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
        }, // 设置边距
      });

      await page.close();

      return data;
    };

    const pdfBuffer = await start();
    return this.qiniuService.uploadFileByBuffer(Buffer.from(pdfBuffer));

    // 设置响应头，确保客户端能够识别为PDF文件
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
    // res.send(pdfBuffer); // 发送二进制流
  }
}
