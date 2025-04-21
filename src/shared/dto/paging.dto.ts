import { IsNumber } from 'class-validator';

export class PagingDto {
  @IsNumber()
  page: number;
  @IsNumber()
  pageSize: number;
}
