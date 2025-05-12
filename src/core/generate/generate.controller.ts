import { Controller, Get, Query } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { QueryGenerateDto } from './dto/query-generate.dto';
import { GenerateService } from './generate.service';

@Controller('generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Get('list')
  async getGenerateList(
    @Query() queryGenerateDto: QueryGenerateDto,
    @User('sub') userId,
  ) {
    queryGenerateDto.userId = userId;
    const total =
      await this.generateService.getGenerateRecordDetailCount(userId);
    const data =
      await this.generateService.getGenerateRecordDetailList(queryGenerateDto);
    return { total, data };
  }
}
