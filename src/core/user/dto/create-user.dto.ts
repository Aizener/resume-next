import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 12)
  username: string;

  @IsString()
  @Length(2, 12)
  password: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsPhoneNumber('CN')
  @IsOptional()
  mobile?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
