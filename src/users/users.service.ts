import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repo: UsersRepository) {}

  // Get one user by ID
  async findOne(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // Get all users
  findAll() {
    return this.repo.findAll();
  }

  // Create a new user
  create(email: string) {
    return this.repo.create(email);
  }

  // Update user's email
  async update(id: number, email: string) {
    const updatedUser = await this.repo.update(id, email);
    if (!updatedUser) throw new NotFoundException('User not found');
    return updatedUser;
  }

  // Delete a user
  async delete(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return this.repo.delete(id);
  }
}
