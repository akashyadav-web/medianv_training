import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.entity';
import { IsString } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column({ unique: true })
   @IsString()
  username: string;

  @Column()
   @IsString()
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
