import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { TaskStatus } from './task.status.enum';
import { IsString } from 'class-validator';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column()
  description: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN })
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
  user: User;
}
