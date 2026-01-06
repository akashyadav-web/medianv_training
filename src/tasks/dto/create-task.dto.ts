import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Learn NestJS' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Understand Swagger properly' })
  @IsString()
  description: string;
}
