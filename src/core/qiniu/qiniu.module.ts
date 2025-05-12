import { Global, Module } from '@nestjs/common';
import { QiniuController } from './qiniu.controller';
import { QiniuService } from './qiniu.service';

@Global()
@Module({
  providers: [QiniuService],
  exports: [QiniuService],
  controllers: [QiniuController],
})
export class QiniuModule {}
