import { Type } from 'class-transformer';
import {
  IsEmail,
  IsJSON,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';
import { TransformEmpty } from 'src/decorators/transform-empty.decorator';

export class UpdateResumeDto {
  @IsUUID()
  id: string;

  @IsString()
  @Length(2, 12)
  title: string;

  @IsString()
  @IsOptional()
  @TransformEmpty()
  realname: string;

  @IsNumber()
  @IsOptional()
  @TransformEmpty()
  @Type(() => Number)
  age: number;

  @IsString()
  @IsOptional()
  education: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsPhoneNumber('CN', { message: '请输入正确的手机号码' })
  @IsOptional()
  @TransformEmpty()
  mobile: string;

  @IsEmail(undefined, { message: '请输入正确的邮箱格式' })
  @IsOptional()
  @TransformEmpty()
  email: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsString()
  @IsOptional()
  industry: string;

  @IsString()
  @IsOptional()
  advantage: string;

  @IsString()
  @IsOptional()
  advantageHtml: string;

  @IsJSON()
  @IsOptional()
  @TransformEmpty()
  works: string;

  @IsJSON()
  @IsOptional()
  @TransformEmpty()
  projects: string;

  @IsString()
  @IsOptional()
  other: string;

  userId: string;

  @IsString()
  @IsOptional()
  templateId: string;
}
