import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { CreateResumeDto } from './dto/create-resume.dto';
import { GenerateDto } from './dto/generator.dto';
import { QueryResumeDto } from './dto/query-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get('get')
  getResumeById(@Query('id') id: string, @User('sub') userId: string) {
    return this.resumeService.getResumeById(id, userId);
  }

  @Get('list')
  async getResumeList(
    @Query() queryResumeDto: QueryResumeDto,
    @User('sub') userId: string,
  ) {
    queryResumeDto.userId = userId;
    const total = await this.resumeService.getResumeTotal(userId);
    const data = await this.resumeService.getResumeList(queryResumeDto, {
      id: true,
      title: true,
      createdTime: true,
      updatedTime: true,
    });
    return { data, total };
  }

  @Post('create')
  createResume(
    @User('sub') userId: string,
    @Body() createResumeDto: CreateResumeDto,
  ) {
    return this.resumeService.createResume(userId, createResumeDto);
  }

  @Put('update')
  updateResume(
    @User('sub') userId: string,
    @Body() updateResumeDto: UpdateResumeDto,
  ) {
    return this.resumeService.updateResume(userId, updateResumeDto);
  }

  @Post('generate')
  generateResume(
    @Body() generateDto: GenerateDto,
    @User('sub') userId: string,
    @Headers('Authorization') auth: string,
  ) {
    generateDto.userId = userId;
    generateDto.token = auth.split(' ')[1];
    return this.resumeService.generateResume(generateDto);
  }

  @Delete(':id')
  deleteResumeById(@Param('id') id: string) {
    return this.resumeService.deleteResumeById(id);
  }
}
