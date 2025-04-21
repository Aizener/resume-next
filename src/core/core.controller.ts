import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import OpenAI from 'openai';
import puppeteer from 'puppeteer-core';

@Controller()
export class AppController {
  @Post('ai')
  aiTest() {
    const openai = new OpenAI({
      // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
      apiKey: 'sk-baa03a067cb44e92a3bcc54504ab5826', // 如何获取API Key：https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key
      baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    });

    async function main() {
      const completion = await openai.chat.completions.create({
        model: 'qwen-plus', // 模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages: [
          // { role: 'system', content: '你是一个' },
          {
            role: 'user',
            content:
              '用户是一名21岁的东北医学院毕业的学生，希望参与医生行业的工作，请帮忙生成5条左右的个人技能简介（每条20字左右），希望与内科相关！',
          },
        ],
      });
      console.log(completion.choices[0].message.content);
      return completion;
    }

    return main();
  }

  @Get('/test')
  async test(@Res() res: Response) {
    const start = async () => {
      // Launch the browser and open a new blank page
      const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        // args: ['--window-size=1920,1080'],
      });
      const page = await browser.newPage();

      // 设置正确的桌面端环境
      // await page.setViewport({
      //   // width: 1920,
      //   // height: 1080,
      //   width: 794,
      //   height: 1123,
      //   // height: 1754 * 5, // 拉到5页这么高
      //   deviceScaleFactor: 2, // 标准缩放
      //   // isMobile: false, // 重要！告诉页面：我不是手机
      //   // hasTouch: false, // 关闭触控支持
      // });

      // 打开网页
      await page.goto('http://iamcola.cc/article', {
        waitUntil: 'networkidle0', // 等待页面加载完成
      });

      // 生成 PDF，设置为 A4 纸张大小
      const data = await page.pdf({
        path: 'example.pdf', // 输出文件路径
        format: 'A4', // 设置为 A4 大小
        printBackground: true, // 是否打印背景图像
        // preferCSSPageSize: true, // 超关键！
        scale: 1,
        margin: {
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
        }, // 设置边距
      });

      // await browser.close();
      return data;
    };

    const pdfBuffer = await start();

    // 设置响应头，确保客户端能够识别为PDF文件
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
    res.send(pdfBuffer); // 发送二进制流
  }
}
