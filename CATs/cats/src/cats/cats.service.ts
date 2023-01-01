import { PrismaService } from 'src/prisma/prisma.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Cat } from '.prisma/client';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Exclude } from 'class-transformer';

@Injectable()
export class CatsService {
  constructor(private readonly PrismaService: PrismaService) {}
  async signUp(body: CatRequestDto): Promise<Omit<Cat, 'password'>> {
    // Check if email already exists
    const existingCat = await this.PrismaService.cat.findUnique({
      where: {
        email: body.email,
      },
    });
    if (existingCat) {
      throw new UnauthorizedException('Email already exists');
    }

    const cat = await this.PrismaService.cat.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
        catname: body.catname,
      },
    });

    const { password, ...result } = cat;

    return result;
  }
}
