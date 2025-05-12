import { ConflictException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Payload } from 'src/shared/types';

export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest<TUser = Payload>(err: Error, user: TUser) {
    if (err || !user) {
      throw err || new ConflictException('请输入必填参数！');
    }
    return user;
  }
}
