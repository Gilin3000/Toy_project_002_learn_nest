import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { VerifyEmailDto } from 'src/users/dto/verify-email.dto';
import { UserLoginDto } from 'src/users/dto/user-login.dto';
import { UserInfo } from 'src/users/interface/userinfo.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;

    return await this.usersService.login(email, password);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    return await this.usersService.getUserInfo(userId);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
