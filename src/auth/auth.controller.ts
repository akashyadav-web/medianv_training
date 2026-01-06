import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { RegisterResponseDto } from './dto/register-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({ type: RegisterResponseDto })
  register(
    @Body() dto: AuthCredentialsDto,
  ): Promise<RegisterResponseDto> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOkResponse({ type: LoginResponseDto })
  login(
    @Body() dto: AuthCredentialsDto,
  ): Promise<LoginResponseDto> {
    return this.authService.login(dto);
  }
}
