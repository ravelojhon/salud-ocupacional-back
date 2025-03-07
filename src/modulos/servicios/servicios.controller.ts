import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServicioService } from '../servicios/servicios.service';

@ApiTags('Servicios')
@Controller('servicios')
export class ServiciosController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get()
  findAll() {
    return this.servicioService.getServicios();
  }
}
