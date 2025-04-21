import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeProcessor } from './resume.processor';
import { ResumeService } from './resume.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'resume',
      redis: {
        host: 'localhost',
        port: 6379,
        password: process.env.REDIS_PASSWORD,
      },
    }),
  ],
  controllers: [ResumeController],
  providers: [ResumeService, ResumeProcessor],
})
export class ResumeModule {}
