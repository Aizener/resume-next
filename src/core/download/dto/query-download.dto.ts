import { PagingDto } from 'src/shared/dto/paging.dto';

export class QueryDownloadDto extends PagingDto {
  userId: string;
}
