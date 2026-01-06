import { ApiProperty } from '@nestjs/swagger';
import { TaskResponseDto } from './task-response.dto';

export class TaskListResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ type: [TaskResponseDto] }) // 👈 MUST BE ARRAY
  data: TaskResponseDto[];

  @ApiProperty({ example: 'Tasks fetched successfully' })
  message: string;
}
