import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { ResumeGenerateStatus } from 'src/shared/enums/resume';

export class SaveGenerateDto {
  id?: string;
  @IsNumber()
  @Type(() => Number)
  date?: number;
  @IsNumber()
  @Type(() => Number)
  times?: number;
  @IsString()
  title?: string;
  @IsString()
  url?: string;
  @IsString()
  resumeId: string;
  @IsString()
  userId: string;
  status: ResumeGenerateStatus;
}
