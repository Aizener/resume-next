import {
  // IsEmail,
  // IsOptional,
  // IsPhoneNumber,
  IsString,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;

  // @IsEmail()
  // @IsOptional()
  // email: string;

  // @IsPhoneNumber()
  // @IsOptional()
  // mobile: string;

  // @IsString()
  // @IsOptional()
  // status: string;
}
