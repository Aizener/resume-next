import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { PrismaExceptionFilter } from 'src/filters/prisma-exception.filter';
import { IS_DEV_ENV } from 'src/shared/utils/env.util';
import { AppController } from './core.controller';
import { LoggerModule } from './logger/logger.module';
import { LoggerService } from './logger/logger.service';
import { ProfileModule } from './profile/profile.module';
import { QiniuModule } from './qiniu/qiniu.module';
import { RedisModule } from './redis/redis.module';
import { ResumeModule } from './resume/resume.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    ProfileModule,
    ResumeModule,
    UploadModule,
    QiniuModule,
    RedisModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      inject: [LoggerService],
      useFactory: (loggerService: LoggerService) => {
        return new PrismaExceptionFilter(loggerService);
      },
    },
  ],
})
export class CoreModule {}
