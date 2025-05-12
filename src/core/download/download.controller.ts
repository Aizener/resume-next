import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { DownloadService } from './download.service';
import { QueryDownloadDto } from './dto/query-download.dto';
import { SaveDownloadDto } from './dto/save-download.dto';

@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get('list')
  async getDownloadRecordList(
    @Query() queryDownloadDto: QueryDownloadDto,
    @User('sub') userId: string,
  ) {
    queryDownloadDto.userId = userId;
    const total = await this.downloadService.getDownloadRecordCount(userId);
    const data =
      await this.downloadService.getDownloadRecordList(queryDownloadDto);
    return { total, data };
  }

  @Post('save')
  saveDownload(
    @Body() saveDownloadDto: SaveDownloadDto,
    @User('sub') userId: string,
  ) {
    saveDownloadDto.userId = userId;
    return this.downloadService.saveDownload(saveDownloadDto);
  }
}
