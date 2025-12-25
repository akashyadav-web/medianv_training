import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Learn NestJS',
    description: 'Short, human-readable title of the task',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Study Swagger integration and API documentation',
    description: 'Detailed explanation of what the task involves',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
