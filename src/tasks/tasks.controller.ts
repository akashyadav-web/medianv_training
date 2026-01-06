import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { TaskListResponseDto } from './dto/task-list-response.dto';
import { TaskSingleResponseDto } from './dto/task-single-response.dto';

@ApiTags('Tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ type: TaskSingleResponseDto })
  create(@Body() dto: CreateTaskDto, @GetUser() user: any) {
    return this.tasksService.create(dto, user);
  }

  @ApiOkResponse({ type: TaskListResponseDto })
  @Get()
  findAll(@GetUser() user: any) {
    return this.tasksService.findAll(user);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TaskSingleResponseDto })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
    @GetUser() user: any,
  ) {
    return this.tasksService.update(id, dto, user);
  }

  @Delete(':id')
  @ApiOkResponse({
    schema: {
      example: {
        statusCode: 200,
        data: null,
        message: 'Task deleted successfully',
      },
    },
  })
  remove(@Param('id') id: string, @GetUser() user: any) {
    return this.tasksService.remove(id, user);
  }
}
