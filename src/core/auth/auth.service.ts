import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { User } from 'prisma/generated';
import { Payload } from 'src/shared/types';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(auth: string, password: string): Promise<User> {
    // const user = await this.userService.findUserByAuth(auth);
    const user = await this.userService.findUserByUsername(auth);
    if (!user) {
      return this.userService.createUser({ username: auth, password });
    }
    const isValid = await verify(user.password, password);
    if (!isValid) {
      throw new ConflictException('用户名或者密码错误！');
    }
    return user;
  }

  async login(payload: Payload) {
    const user = await this.userService.findUserById(payload.sub, {
      password: true,
    });
    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
