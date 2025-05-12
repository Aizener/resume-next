import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PagingDto {
  @IsNumber()
  @Type(() => Number)
  page: number;
  @IsNumber()
  @Type(() => Number)
  pageSize: number;
}
