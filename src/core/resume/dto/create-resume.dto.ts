import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateResumeDto {
  @IsString()
  @Length(2, 12)
  title: string;

  @IsString()
  @Length(2, 10)
  @IsOptional()
  realname: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsString()
  @IsOptional()
  education: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsPhoneNumber('CN')
  @IsOptional()
  mobile: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsString()
  @IsOptional()
  industry: string;
}
