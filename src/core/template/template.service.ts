import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { QueryTemplateDto } from './dto/query-template.dto';

@Injectable()
export class TemplateService {
  constructor(private readonly prismaService: PrismaService) {}

  getTemplateList(queryTemplateDto: QueryTemplateDto) {
    const { page, pageSize, title, type, path } = queryTemplateDto;
    const conditions: Record<string, any>[] = [];
    if (title) {
      conditions.push({ title: { conditions: title } });
    }
    if (type) {
      conditions.push({ type });
    }
    if (path) {
      conditions.push({ path });
    }
    console.log('conditions', conditions);
    return this.prismaService.template.findMany({
      where: conditions.length
        ? {
            OR: conditions,
          }
        : undefined,
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }

  getTemplateType() {
    return this.prismaService.template.groupBy({
      by: 'type',
    });
  }

  getTemplateTotal(queryTemplateDto: QueryTemplateDto) {
    const { title, type } = queryTemplateDto;
    return this.prismaService.template.count({
      where: {
        OR: [
          {
            title: {
              contains: title,
            },
          },
          { type },
        ],
      },
    });
  }

  getRecommendTemplate() {
    return this.prismaService.template.findMany({
      orderBy: {
        usedTimes: 'desc',
      },
      take: 10,
    });
  }

  getNewTemplate(queryTemplateDto: QueryTemplateDto) {
    const { page, pageSize } = queryTemplateDto;
    return this.prismaService.template.findMany({
      orderBy: {
        createdTime: 'desc',
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }

  addTemplateUsedTimes(id: string) {
    return this.prismaService.template.update({
      where: { id },
      data: {
        usedTimes: { increment: 1 },
      },
    });
  }
}
