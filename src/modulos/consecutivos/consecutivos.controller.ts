import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsecutivosService } from './consecutivos.service';

@ApiTags('Consecutivos')
@Controller('api/consecutivos')
export class ConsecutivosController {
  constructor(private readonly consecutivosService: ConsecutivosService) {}

  @Post('/')
  listar(@Body() body: any) {
    return this.consecutivosService.listar(body);
  }
}
