import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get('get')
  getResumeById(@Query('id') id: string) {
    return this.resumeService.getResumeById(id);
  }

  @Post('create')
  createResume(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.createResume(createResumeDto);
  }

  @Put('update')
  updateResume(@Body() updateResumeDto: UpdateResumeDto) {
    return this.resumeService.updateResume(updateResumeDto);
  }

  @Post('generate')
  generateResume() {
    return this.resumeService.generateResume();
  }
}
