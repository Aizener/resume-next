import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Payload } from 'src/shared/types';

export const User = createParamDecorator(
  (data: keyof Payload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user;
    if (user) {
      if (Reflect.ownKeys(user).includes(data)) {
        return user[data];
      }
      return user;
    }
    return null;
  },
);
