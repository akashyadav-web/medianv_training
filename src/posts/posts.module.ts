import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';  // if you have one
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';
import { DatabaseModule } from '../database/database.module'; // DatabaseService comes from here

@Module({
  imports: [DatabaseModule],       //  provide DatabaseService to repository
  controllers: [PostsController],  // optional if you have a controller
  providers: [
    PostsService,                  //  service
    PostsRepository                //  repository
  ],
  exports:[PostsService]
})
export class PostsModule {}
