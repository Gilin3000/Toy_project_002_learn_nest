import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [CatsController],
  providers: [CatsService, PrismaService],
  exports: [CatsService],
})
export class CatsModule {}
