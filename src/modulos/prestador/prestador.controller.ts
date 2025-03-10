import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrestadorService } from './prestador.service';
import { CreatePrestadorDTO } from './dto/prestador.dto';

@ApiTags('Prestadores')
@Controller('prestador')
export class PrestadorController {
  constructor(private readonly prestadorService: PrestadorService) {}

  @Get()
  findAll() {
    return this.prestadorService.getPrestadores();
  }

  @Post()
  async createPrestador(@Body() createPrestadorDTO: CreatePrestadorDTO) {
    return this.prestadorService.createPrestador(createPrestadorDTO);
  }

  @Patch()
  async editPrestador(@Body() createPrestadorDTO: CreatePrestadorDTO) {
    return this.prestadorService.editPrestador(createPrestadorDTO);
  }

  @Get('getById/:PrestadorId')
  getPrestadorById(@Param('PrestadorId') PrestadorId: number) {
    return this.prestadorService.getPrestadorById(PrestadorId);
  }
}
