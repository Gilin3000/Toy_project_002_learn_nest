import { JwtAuthGuard } from './../auth/jwt/jwt.guard';
import { AuthService } from './../auth/auth.service';
import { ReadOnlyCatDto } from './dto/cat.dto';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import {
  Controller,
  Put,
  Get,
  Post,
  Patch,
  Delete,
  HttpException,
  Param,
  UseFilters,
  ParseIntPipe,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { PositiveInPipe } from 'src/common/interceptors/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { Body, UseGuards } from '@nestjs/common/decorators';
import { CatRequestDto } from './dto/cats.request.dto';
import { ApiOperation } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { Cat } from '@prisma/client';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@GetUser() cat: Cat) {
    console.log('hello controller');
    return cat;
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveInPipe) param: number) {
    console.log(param);
    return 'one cat';
  }

  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 200, description: 'success!', type: ReadOnlyCatDto })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateParialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
