import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { AspirantesService } from './aspirantes.service';
import { CreateAspiranteDTO } from './dto/aspirantes.dto';

@ApiTags('aspirantes')
@Controller('aspirantes')
export class AspirantesController {
  constructor(private readonly aspirantesService: AspirantesService) {}

@Get()
findAll() {
  return this.aspirantesService.getAspirantes();
}

@Post()
async createAspirante(@Body() createAspiranteDTO: CreateAspiranteDTO) {
    return this.aspirantesService.createAspirante(createAspiranteDTO);
}

@Patch()
async editAspirante(@Body() createAspiranteDTO: CreateAspiranteDTO) {
    return this.aspirantesService.editAspirante(createAspiranteDTO);
}

@Get(':id')
async getAspiranteById(@Param('id') id: number) {
    return this.aspirantesService.getAspiranteById(id);
}

}
