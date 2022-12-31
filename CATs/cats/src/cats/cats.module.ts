import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, PrismaService],
  exports: [CatsService],
})
export class CatsModule {}
