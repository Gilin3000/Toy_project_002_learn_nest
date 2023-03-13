import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { EmailService } from './email/email.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class AppModule {}
