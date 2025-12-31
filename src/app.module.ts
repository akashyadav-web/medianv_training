import { Module } from '@nestjs/common'; 
import { HttpModule } from '@nestjs/axios'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
 
 
@Module({ 
  imports: [HttpModule], //  we import it here 
  controllers: [AppController], 
  providers: [AppService], 
}) 
export class AppModule {}
