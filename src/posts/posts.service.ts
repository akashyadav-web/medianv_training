import { Injectable, NotFoundException } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private repo: PostsRepository) {}

  create(title: string,userId:number) {
    return this.repo.create(title,userId);
  }

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: number) {
    const post = await this.repo.findOne(id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  findByUser(userId: number) {
    return this.repo.findByUser(userId);
  }

  async update(id: number, title: string) {
    const post = await this.repo.update(id, title);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async delete(id: number) {
    const post = await this.repo.delete(id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
}
