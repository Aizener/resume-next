import { InjectQueue } from '@nestjs/bull';
import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Queue } from 'bull';
import { Prisma } from 'prisma/generated';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ERROR_MESSAGE } from 'src/shared/utils/error-message.util';
import { getCurrentDayTime } from 'src/shared/utils/get-day.util';
import { GenerateService } from '../generate/generate.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { GenerateDto } from './dto/generator.dto';
import { QueryResumeDto } from './dto/query-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumeService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly generateService: GenerateService,
    @InjectQueue('resume') private resumeQueue: Queue,
  ) {}

  async getResumeTotal(userId: string) {
    return this.prismaService.resume.count({ where: { userId } });
  }

  async getResumeList(
    queryResumeDto: QueryResumeDto,
    select?: Prisma.ResumeSelect,
  ) {
    const { userId, page, pageSize } = queryResumeDto;
    return this.prismaService.resume.findMany({
      select,
      where: { userId },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdTime: 'desc',
      },
    });
  }

  async getResumeById(id: string, userId: string) {
    const resume = await this.prismaService.resume.findUnique({
      where: { id, userId },
      include: {
        template: true,
      },
    });
    if (!resume) {
      throw new NotFoundException('resume is not exist.');
    }
    const newResume: Record<string, unknown> = {};
    Object.keys(resume).forEach((key: keyof typeof resume) => {
      newResume[key] = resume[key] === null ? '' : resume[key];
    });
    return newResume;
  }

  createResume(userId: string, createResumeDto: CreateResumeDto) {
    createResumeDto.userId = userId;
    return this.prismaService.resume.create({
      data: createResumeDto,
      include: {
        template: true,
      },
    });
  }

  updateResume(userId: string, updateResumeDto: UpdateResumeDto) {
    updateResumeDto.userId = userId;
    const { id, ...data } = updateResumeDto;
    const newResume: Record<string, unknown> = {};
    console.log('data', data);
    Object.keys(data).forEach((key: keyof typeof data) => {
      newResume[key] = data[key] === null ? '' : data[key];
    });
    return this.prismaService.resume.update({
      where: { id },
      data: newResume,
      include: {
        template: true,
      },
    });
  }

  async generateResume(generateDto: GenerateDto) {
    const currentDay = getCurrentDayTime();
    const isValid = await this.generateService.checkGenerateLimit(
      generateDto.userId,
      currentDay,
    );
    if (!isValid) {
      throw new ServiceUnavailableException(ERROR_MESSAGE.MAX_LIMIT);
    }
    return this.resumeQueue.add('generate', generateDto);
  }

  async deleteResumeById(id: string) {
    return this.prismaService.resume.delete({
      where: { id },
    });
  }
}
