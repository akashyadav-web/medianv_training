import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class Task {
  @ApiProperty({ example: 'a1b2c3' })
  id: string;

  @ApiProperty({ example: 'Learn NestJS' })
  title: string;

  @ApiProperty({ example: 'Swagger integration' })
  description: string;

  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;
}
