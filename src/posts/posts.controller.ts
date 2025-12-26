import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private service: PostsService) {}

  // CREATE
  @Post()
  create(
    @Body('title') title: string,
    @Body('userId') userId: number,
  ) {
    return this.service.create(title, userId);
  }

  // READ ALL
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  // READ BY USER
  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.service.findByUser(+id);
  }

  // UPDATE
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
  ) {
    return this.service.update(+id, title);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
