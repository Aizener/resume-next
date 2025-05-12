import { Controller, Get, Query } from '@nestjs/common';
import { Public } from 'src/decorators/is-public.decorator';
import { QueryTemplateDto } from './dto/query-template.dto';
import { TemplateService } from './template.service';

@Public()
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get('list')
  async getTemplateList(@Query() queryTemplateDto: QueryTemplateDto) {
    const total = await this.templateService.getTemplateTotal(queryTemplateDto);
    const data = await this.templateService.getTemplateList(queryTemplateDto);
    return { total, data };
  }

  @Get('types')
  getTemplateType() {
    return this.templateService.getTemplateType();
  }

  @Get('recommend')
  getRecommendTemplate() {
    return this.templateService.getRecommendTemplate();
  }

  @Get('new')
  getNewTemplate(@Query() queryTemplateDto: QueryTemplateDto) {
    return this.templateService.getNewTemplate(queryTemplateDto);
  }
}
