// app.controller.ts

import { Body, Controller, Post } from '@nestjs/common'; 
import { HttpService } from '@nestjs/axios'; 
import { AppService } from './app.service'; 
 
 
@Controller() 
export class AppController { 
  constructor( 
    private readonly appService: AppService, 
    private readonly httpService: HttpService, 
  ) {} 
 
 
  @Post('/order') 
  createOrder(@Body() data) { 
    const createdOrder = this.appService.createOrder(data); 
 
 
    this.httpService 
      .post('https://webhook.site/a13b5452-5f37-485b-be82-92b84a1c30ab', data) 
      .subscribe({ 
        complete: () => { 
          console.log('completed'); 
        }, 
        error: (err) => { 
         console.log(err)
        }, 
      }); 
 
 
    return createdOrder; 
  } 
}