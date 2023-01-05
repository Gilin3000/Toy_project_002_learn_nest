import { PickType } from '@nestjs/swagger';
import { CatRequestDto } from 'src/cats/dto/cats.request.dto';

export class LoginRequestDto extends PickType(CatRequestDto, [
  'email',
  'password',
] as const) {}
