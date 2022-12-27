import { CatRequestDto } from './dto/cats.request.dto';
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { model } from 'mongoose';
import { Cat } from './cats.schema';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private catModel: model<Cat>) {}

  async existsByEmail(email: string): Promise<boolean> {
    try {
      const result = await this.catModel.exist({ email });
      return result;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(cat:CatRequestDto): Promise<Cat>{
    return await this.catModel.create(cat);
  }
}
