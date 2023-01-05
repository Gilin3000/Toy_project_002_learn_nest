import { jwtstrategy } from './jwt/jwt.strategy';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),

    forwardRef(() => CatsModule),
  ],
  providers: [AuthService, jwtstrategy, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
