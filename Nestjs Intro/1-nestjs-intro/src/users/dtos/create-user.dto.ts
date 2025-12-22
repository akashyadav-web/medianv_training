import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
 id:number;
 @IsString({message:'Name should be a string value'})
 @IsNotEmpty()
 @MinLength(3,{message:'Name should have a minimum of 3 characters'})
 name:string;
 @IsString()
 @IsOptional()
 gender?:string;
 @IsEmail()
 email:string;

 isMarried:boolean;


}