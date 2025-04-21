import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const req = http.getRequest<Request>();
    const res = http.getResponse<Response>();
    const response = exception.getResponse();
    let errMessage = exception.message;
    if (
      typeof response === 'object' &&
      response['statusCode'] === HttpStatus.BAD_REQUEST
    ) {
      errMessage = response['message'];
    }
    const statusCode = exception.getStatus();

    res.status(statusCode).json({
      statusCode: statusCode,
      url: req.url,
      message: errMessage,
      data: null,
    });
  }
}
