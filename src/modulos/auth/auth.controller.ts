import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('api/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  Login(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }

  @Post('getInfoAuth')
  GetInfoAuth(@Body() InfoAuth: any) {
    return this.authService.login(InfoAuth);
  }
}
