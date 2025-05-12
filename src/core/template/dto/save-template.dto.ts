import { IsString } from 'class-validator';

export class SaveTemplateDto {
  @IsString()
  title: string;
  usedTimes: number;
}
