import { PrismaService } from 'src/prisma/prisma.service';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Payload } from './jwt.payload';

@Injectable()
export class jwtstrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const cat = await this.prismaService.findCatByEmailWithoutPassword(
      payload.email,
    );

    if (cat) {
      return cat;
    } else {
      throw new UnauthorizedException(
        'You are not authorized to access this resource',
      );
    }
  }
}
