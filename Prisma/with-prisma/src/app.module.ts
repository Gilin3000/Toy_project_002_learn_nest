import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
