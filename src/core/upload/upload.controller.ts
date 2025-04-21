import {
  Controller,
  // FileTypeValidator,
  // HttpStatus,
  // MaxFileSizeValidator,
  // ParseFilePipe,
  // ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadPipe } from 'src/pipes/file-upload.pipe';
import { QiniuService } from '../qiniu/qiniu.service';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly qiniuService: QiniuService,
  ) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new FileUploadPipe(),
      // new ParseFilePipeBuilder()
      //   .addFileTypeValidator({
      //     fileType: 'image/jpeg',
      //   })
      //   .addMaxSizeValidator({
      //     maxSize: 1000,
      //     message: '请上传不超过2M的文件',
      //   })
      //   .build({
      //     errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      //   }),
    )
    file: Express.Multer.File,
  ) {
    return this.qiniuService.uploadFileByBuffer(file.buffer);
  }
}
