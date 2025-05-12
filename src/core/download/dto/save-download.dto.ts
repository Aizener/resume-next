import { IsString } from 'class-validator';

export class SaveDownloadDto {
  userId: string;
  @IsString()
  title: string;
  @IsString()
  url: string;
  @IsString()
  generateRecordDetailId: string;
}
