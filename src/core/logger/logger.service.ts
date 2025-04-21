import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

@Injectable()
export class LoggerService {
  private readonly logger;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(
          ({
            timestamp,
            level,
            message,
          }: {
            timestamp: string;
            level: string;
            message: string;
          }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
          },
        ),
      ),
      transports: [
        new transports.Console(), // 终端输出

        // 每天一个文件，保存错误日志
        new transports.DailyRotateFile({
          dirname: 'logs', // 保存目录
          filename: 'error-%DATE%.log', // 文件名规则
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true, // 压缩旧日志
          maxSize: '20m',
          maxFiles: '14d', // 日志保留14天
          level: 'error', // 只记录 error 级别
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    this.logger.error(`${message} ${trace || ''}`);
  }
}
