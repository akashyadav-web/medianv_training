import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<void> {
    const newUser = this.userRepository.create(user);
    try {
      await this.userRepository.save(newUser);
    } catch (e) {
      if (e.code === '23505') {
        // duplicate username in Postgres
        throw new ConflictException('Username already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  //find user by username
  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }
}
