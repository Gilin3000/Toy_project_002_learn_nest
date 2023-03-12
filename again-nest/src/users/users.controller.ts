import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {}
import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }
}
