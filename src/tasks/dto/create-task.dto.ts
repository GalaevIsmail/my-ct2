import {
  IsBoolean,
  IsIn,
  IsNotEmpty,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import type { Category } from '../entities/task.entity';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Изучить NestJS',
    description: 'Название задачи',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    example: 'Изучить валидацию и Swagger',
    description: 'Описание задачи',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    example: false,
    description: 'Статус выполнения задачи',
  })
  @IsBoolean()
  completed!: boolean;

  @ApiProperty({
    example: 'work',
    description: 'Категория задачи',
    enum: ['work', 'personal', 'other'],
  })
  @IsIn(['work', 'personal', 'other'])
  category!: Category;
}