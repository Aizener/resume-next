import { Controller, Get, Param } from '@nestjs/common';
import { QiniuService } from './qiniu.service';

@Controller('qiniu')
export class QiniuController {
  constructor(private readonly qiniuService: QiniuService) {}

  @Get('download/:key')
  getDownloadUrl(@Param('key') key: string) {
    return this.qiniuService.getDownloadUrl(key);
  }
}
