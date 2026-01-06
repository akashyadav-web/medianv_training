import { IsOptional, IsEnum, IsString, MaxLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.status.enum';

export class GetTasksFilterDto {
  @ApiPropertyOptional({
    enum: TaskStatus,
    example: TaskStatus.OPEN,
    description: 'Filter tasks by status',
  })
  @IsOptional()
  @IsEnum(TaskStatus, { message: 'Invalid task status' })
  status?: TaskStatus;

  @ApiPropertyOptional({
    example: 'nestjs',
    description: 'Search by task title or description',
  })
  @IsOptional()
  @IsString({ message: 'Search must be a string' })
  @MaxLength(50, { message: 'Search term is too long' })
  search?: string;
}
