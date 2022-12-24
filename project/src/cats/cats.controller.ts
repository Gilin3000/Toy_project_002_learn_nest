import { createCat, deleteCat, updateParticalCat } from './../../../letsStart/src/cats/cats.service';
import { Controller } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    // // cats/
    // @Get()
    // getAllCat(){
    //     return 'all cat';
    // }

    // // cats/:id
    // @Get(':id')
    // getOneCat(){
    //     return 'one cat';
    // }

    // @Post()
    // createCat(){
    //     return 'update cat';
    // }

    // @Put(':id')
    // updateCat(){
    //     return 'update cat';
    // }

    // @Patch(':id')
    // updateParticalCat(){
    //     return 'update';
    // }

    // @delete(':id')
    // deleteCat(){
    //     return 'delete service';
    // }

}
