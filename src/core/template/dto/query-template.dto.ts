import { IsOptional, IsString } from 'class-validator';
import { PagingDto } from 'src/shared/dto/paging.dto';

export class QueryTemplateDto extends PagingDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  path: string;
}
