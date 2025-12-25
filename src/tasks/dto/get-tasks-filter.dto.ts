import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @ApiPropertyOptional({ enum: TaskStatus })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiPropertyOptional({ example: 'nestjs' })
  @IsOptional()
  @IsString()
  search?: string;
}
