import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CiudadService } from './ciudad.service';

@ApiTags('ciudad')
@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Get()
  findAll() {
    return this.ciudadService.getCiudades();
  }
}
