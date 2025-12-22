import { Controller, Get, Param, Post, Query,ParseIntPipe,ValidationPipe,DefaultValuePipe, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";

// http://localhost:3000/users
@Controller('users')
export class UserController{
    constructor(private usersService:UsersService){}  
    @Get()
  getUsers(@Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,
          @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number)
          {
    //const userService= new UserService();
     console.log(limit,page)
    
    return this.usersService.getAllUsers();

  }
 // http://localhost:3000/users/101
  @Get(':id')
  getUserByid(@Param('id',ParseIntPipe) id:number){
    //const usersService=new UserService();
   
   return  this.usersService.getUserById(id)

  }



   @Post()
  createUsers(@Body(new ValidationPipe()) user:CreateUserDto){
   // const user={id:3,name:'akash',email:'akash@gmail.com',gender:'male',isMarried:false}
   // const usersService=new UserService();
    
   // usersService.createUser(user);
   //this.usersService.createUser(user)
    return 'A new user has been created '
  }
}
