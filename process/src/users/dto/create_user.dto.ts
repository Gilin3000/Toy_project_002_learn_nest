import { Transform } from 'class-transformer';
import {
  IsString,
  Matches,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';
import { NotIn } from '../not-in';

export class CreateUserDto {
  @Transform((params) => params.value.trim())
  @NotIn('password', { message: 'Name cannot contain password' })
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}
