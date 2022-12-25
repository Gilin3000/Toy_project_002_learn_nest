import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { PositiveIntPipe } from '../common/exceptions/positiveint.pipe';
import { HttpExceptionFilter } from './../http-exception.filter';
import { Controller, HttpException, UseFilters, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { Delete, Patch, Get, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  // cats/
  @Get()
  getAllCat() {
    console.log('hello controller');
    // throw new HttpException('api broken', 401);
    return {cats: 'get all cat api'};
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    // console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'update cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateParticalCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
