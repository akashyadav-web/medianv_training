import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { User } from '../user/user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async register(dto: AuthCredentialsDto): Promise<{ message: string }> {
    const { username, password } = dto;

    //initial check
    const exists = await this.userRepo.findOneBy({ username });
    if (exists) {
      throw new ConflictException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepo.create({
      username,
      password: hashedPassword,
    });

    //  DB-level race condition protection
    try {
      await this.userRepo.save(user);
    } catch (e: any) {
      if (e.code === '23505') {
        throw new ConflictException('Username already exists');
      }
      throw e; 
    }

    return { message: 'User registered successfully' };
  }

  async login(
    dto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const user = await this.userRepo.findOneBy({
      username: dto.username,
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(dto.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      'secret',
      { expiresIn: '1h' },
    );

    return { accessToken: token };
  }
}
