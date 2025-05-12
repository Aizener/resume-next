import { IsString } from 'class-validator';

export class GenerateDto {
  @IsString()
  type: string;
  @IsString()
  id: string;
  @IsString()
  title: string;
  userId: string;
  token: string;
}
