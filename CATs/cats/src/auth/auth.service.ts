import { UnauthorizedException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaservice: PrismaService,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;

    const cat = await this.prismaservice.cat.findUnique({
      where: {
        email,
      },
    });

    if (!cat) {
      throw new UnauthorizedException('Email does not exist');
    }

    const isPasswordCorrect = await bcrypt.compare(password, cat.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Password is incorrect');
    }

    const payload = { email: email, sub: cat.catname };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
