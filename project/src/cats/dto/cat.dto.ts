import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '3280111',
    description: 'id',
  })
  id: string;
}
