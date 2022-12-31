import { Injectable } from '@nestjs/common/decorators';
import { PipeTransform, HttpException } from '@nestjs/common';

@Injectable()
export class PositiveInPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value must be positive', 400);
    }
    return value;
  }
}
