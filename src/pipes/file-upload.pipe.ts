import {
  Injectable,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class FileUploadPipe implements PipeTransform {
  transform(value: Express.Multer.File) {
    if (!value) {
      throw new UnprocessableEntityException('请上传文件！');
    }
    const maxSize = 1024 * 1024 * 2;
    if (value.size > maxSize) {
      throw new UnprocessableEntityException('请上传小于2M的文件！');
    }
    return value;
  }
}
