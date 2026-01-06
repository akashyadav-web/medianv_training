import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task.status.enum';

export class TaskResponseDto {
  @ApiProperty({ example: 'uuid-value' })
  id: string;

  @ApiProperty({ example: 'Learn NestJS' })
  title: string;

  @ApiProperty({ example: 'Understand Swagger properly' })
  description: string;

  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;
}
