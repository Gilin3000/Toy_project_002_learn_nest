import { Transform } from 'class-transformer';
import {
  IsString,
  Matches,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';
import { BadRequestException } from '@nestjs/common';

export class CreateUserDto {
  @Transform(({ value, obj }) => {
    if (obj.password.includes(obj.name.trim())) {
      throw new BadRequestException('Password cannot contain name');
    }
    return value.trim();
  })
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
