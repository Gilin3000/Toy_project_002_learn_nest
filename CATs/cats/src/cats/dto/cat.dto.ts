import { CatRequestDto } from './cats.request.dto';
import { PickType } from '@nestjs/swagger';
export class ReadOnlyCatDto extends PickType(CatRequestDto, [
  'email',
  'catname',
] as const) {}
