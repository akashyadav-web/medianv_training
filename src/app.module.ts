import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'akash@123',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true, // dev only
    }),
    UserModule,
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
