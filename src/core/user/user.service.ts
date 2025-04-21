import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (user) {
      throw new ConflictException('用户名已经存在！');
    }

    return this.prismaService.user.create({
      data: {
        username,
        password: await hash(password),
        profile: {
          create: {
            score: 0,
            grade: 1,
          },
        },
      },
    });
  }
}
