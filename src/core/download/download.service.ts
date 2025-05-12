import { Injectable } from '@nestjs/common';
import { getCurrentDayTime } from 'src/shared/utils/get-day.util';
import { PrismaService } from '../prisma/prisma.service';
import { QueryDownloadDto } from './dto/query-download.dto';
import { SaveDownloadDto } from './dto/save-download.dto';

@Injectable()
export class DownloadService {
  constructor(private readonly prismaService: PrismaService) {}

  async getDownloadRecordCount(userId: string) {
    return this.prismaService.downloadRecord.count({
      where: { download: { userId } },
    });
  }

  async getDownloadRecordList(queryDownloadDto: QueryDownloadDto) {
    const { userId, page, pageSize } = queryDownloadDto;
    return this.prismaService.downloadRecord.findMany({
      where: { download: { userId } },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }

  async saveDownload(saveDownloadDto: SaveDownloadDto) {
    const { userId, title, url, generateRecordDetailId } = saveDownloadDto;
    const currentDayTime = getCurrentDayTime();
    const download = await this.prismaService.download.findFirst({
      where: { userId, date: currentDayTime },
    });
    if (download) {
      return this.prismaService.download.update({
        where: { id: download.id },
        data: {
          times: { increment: 1 },
          downloadRecord: {
            create: {
              title,
              url,
              generateRecordDetailId,
            },
          },
        },
      });
    }
    return this.prismaService.download.create({
      data: {
        times: 1,
        userId,
        date: currentDayTime,
        downloadRecord: {
          create: {
            title,
            url,
            generateRecordDetailId,
          },
        },
      },
    });
  }
}
