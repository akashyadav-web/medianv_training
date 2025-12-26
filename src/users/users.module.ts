import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { DatabaseModule } from '../database/database.module'; // needed because repo uses DatabaseService

@Module({
  imports: [DatabaseModule],          //  provide DatabaseService to repository
  controllers: [UsersController],     //  only controllers go here
  providers: [
    UsersService,                     //  services
    UsersRepository                   
  ],
  exports:[UsersService]
})
export class UsersModule {}
