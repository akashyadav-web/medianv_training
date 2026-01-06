import { ApiProperty } from '@nestjs/swagger';
import { TaskResponseDto } from './task-response.dto';

export class TaskSingleResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ type: TaskResponseDto })
  data: TaskResponseDto;

  @ApiProperty({ example: 'Task operation successful' })
  message: string;
}
