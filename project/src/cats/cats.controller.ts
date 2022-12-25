import { HttpExceptionFilter } from './../http-exception.filter';
import { Controller, HttpException, UseFilters, Param, ParseIntPipe } from '@nestjs/common';
import { Delete, Patch, Get, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  // cats/
  @Get()
  getAllCat() {
    // throw new HttpException('api broken', 401);
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
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
