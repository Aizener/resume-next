import { PagingDto } from 'src/shared/dto/paging.dto';

export class QueryResumeDto extends PagingDto {
  userId?: string;
}
