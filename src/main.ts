import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { CoreModule } from './core/core.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ResponseInterceptor } from './interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(CoreModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix(config.getOrThrow<string>('GLOBAL_API'));

  app.useStaticAssets(join(__dirname, '..', 'template'), {
    prefix: '/template',
  });

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors({
    origin: config.getOrThrow<string>('CORS_LIST').split(','),
  });

  await app.listen(config.getOrThrow<string>('APPLICATION_PORT'));
}
void bootstrap();
