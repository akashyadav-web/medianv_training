import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Unique username',
  })
  @IsString({ message: 'Username must be a string' })
  @MinLength(3, { message: 'Username must be at least 3 characters' })
  @MaxLength(20, { message: 'Username must not exceed 20 characters' })
  username: string;

  @ApiProperty({
    example: 'Password@123',
    description:
      'Password must be at least 8 characters long and contain a number and a special character',
  })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message:
      'Password must contain at least one number and one special character',
  })
  password: string;
}
