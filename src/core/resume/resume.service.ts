import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumeService {
  constructor(
    private readonly prismaService: PrismaService,
    @InjectQueue('resume') private resumeQueue: Queue,
  ) {}

  getResumeById(id: string) {
    return this.prismaService.resume.findUnique({
      where: { id },
      include: {
        works: true,
        projects: true,
      },
    });
  }

  createResume(createResumeDto: CreateResumeDto) {
    return this.prismaService.resume.create({
      data: createResumeDto,
    });
  }

  updateResume(updateResumeDto: UpdateResumeDto) {
    const { id, ...data } = updateResumeDto;
    return this.prismaService.resume.update({
      where: { id },
      data,
    });
  }

  generateResume() {
    return this.resumeQueue.add('generate', { a: 1 });
  }
}
