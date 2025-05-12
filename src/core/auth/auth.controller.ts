import { Controller, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Public } from 'src/decorators/is-public.decorator';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { Payload } from 'src/shared/types';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('logreg')
  logreg(@Req() req: Request) {
    return this.authService.login(req.user as Payload);
  }

  @Public()
  @Post('profile')
  async profile(@Query('id') id: string) {
    const start = Date.now();
    const user = await this.userService.findUserById(id);
    console.log('Time:', Date.now() - start);
    return user;
  }
}
