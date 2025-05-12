import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Payload } from 'src/shared/types';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'auth',
    });
  }

  async validate(auth: string, password: string): Promise<Payload> {
    const user = await this.authService.validateUser(auth, password);
    return { username: user.username, sub: user.id };
  }
}
