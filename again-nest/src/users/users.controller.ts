import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { VerifyEmailDto } from 'src/users/dto/verify-email.dto';
import { UserLoginDto } from 'src/users/dto/user-login.dto';
import { UserInfo } from 'src/users/interface/userinfo.interface';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
