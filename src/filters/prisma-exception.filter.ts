import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaClientKnownRequestError } from 'prisma/generated/runtime/library';
import { LoggerService } from 'src/core/logger/logger.service';
import { IS_DEV_ENV } from 'src/shared/utils/env.util';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const req = http.getRequest<Request>();
    const res = http.getResponse<Response>();
    const errMessage = IS_DEV_ENV ? exception.message : exception.name;
    const meta = exception.meta;

    this.logger.error(
      `\nHTTP ${HttpStatus.INTERNAL_SERVER_ERROR} - ${exception.code} -  ${req.method} ${req.url} - ${exception.message} \n ${JSON.stringify(exception.meta)}\n`,
      JSON.stringify(exception.stack),
    );

    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      url: req.url,
      meta,
      message: errMessage,
      data: null,
    });
  }
}
