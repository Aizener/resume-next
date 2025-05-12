import {
  Body,
  Controller,
  Post,
  ServiceUnavailableException,
} from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { ERROR_MESSAGE } from 'src/shared/utils/error-message.util';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('generate')
  async generateContent(
    @Body('content') content: string,
    @User('sub') userId: string,
  ) {
    const isValid = await this.aiService.checkAiLimit(userId);
    if (!isValid) {
      throw new ServiceUnavailableException(ERROR_MESSAGE.MAX_LIMIT);
    }
    return this.aiService.generateContent(userId, content);
  }
}
