import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { User } from '../user/user.entity';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskResponseDto } from './dto/task-response.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  private toResponse(task: Task): TaskResponseDto {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
  }

  async create(dto: CreateTaskDto, authUser: any) {
    const user = await this.userRepo.findOneBy({ id: authUser.id });
    if (!user) throw new NotFoundException('User not found');

    const task = this.taskRepo.create({ ...dto, user });
    const saved = await this.taskRepo.save(task);

    return {
      statusCode: 201,
      data: this.toResponse(saved),
      message: 'Task created successfully',
    };
  }

  async findAll(authUser: any) {
    const tasks = await this.taskRepo.find({
      where: { user: { id: authUser.id } },
    });

    return {
      statusCode: 200,
      data: tasks.map(task => this.toResponse(task)),
      message: 'Tasks fetched successfully',
    };
  }

  async update(id: string, dto: UpdateTaskDto, authUser: any) {
    const task = await this.taskRepo.findOne({
      where: { id, user: { id: authUser.id } },
    });

    if (!task) throw new NotFoundException('Task not found');

    task.status = dto.status;
    const updated = await this.taskRepo.save(task);

    return {
      statusCode: 200,
      data: this.toResponse(updated),
      message: 'Task updated successfully',
    };
  }

  async remove(id: string, authUser: any) {
    const result = await this.taskRepo.delete({
      id,
      user: { id: authUser.id },
    });

    if (!result.affected) {
      throw new NotFoundException('Task not found');
    }

    return {
      statusCode: 200,
      data: null,
      message: 'Task deleted successfully',
    };
  }
}
