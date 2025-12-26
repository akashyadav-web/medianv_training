import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  // Create a new user
  @Post()
  create(@Body('email') email: string) {
    return this.service.create(email);
  }

  // Get all users
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Get one user by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  // Update a user's email
  @Patch(':id')
  update(@Param('id') id: string, @Body('email') email: string) {
    return this.service.update(+id, email);
  }

  // Delete a user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
