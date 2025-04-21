import { ConfigService } from '@nestjs/config';
import * as dot from 'dotenv';

dot.config();

const DEV = 'development';
export const IS_DEV_ENV = process.env.NODE_ENV === DEV;
export const isDevEnv = (configService: ConfigService) =>
  configService.getOrThrow('NODE_ENV') === DEV;
