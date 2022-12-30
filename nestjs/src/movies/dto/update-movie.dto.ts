import { CreateMovieDto } from './create-movie.dto';
import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}