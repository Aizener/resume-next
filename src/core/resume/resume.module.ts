import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GenerateModule } from '../generate/generate.module';
import { ResumeController } from './resume.controller';
import { ResumeProcessor } from './resume.processor';
import { ResumeService } from './resume.service';

@Module({
  imports: [
    GenerateModule,
    BullModule.registerQueueAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'resume',
      useFactory: (configService: ConfigService) => {
        return {
          redis: {
            host: configService.getOrThrow<string>('REDIS_HOST'),
            port: Number(configService.getOrThrow<string>('REDIS_PORT')),
            password: configService.getOrThrow<string>('REDIS_PASSWORD'),
          },
        };
      },
    }),
  ],
  controllers: [ResumeController],
  providers: [ResumeService, ResumeProcessor],
})
export class ResumeModule {}
