import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { AntecedentesService } from './antecedentes.service';

@ApiTags('antecedentes')
@Controller('antecedentes')
export class AntecedentesController {
     constructor(private readonly antecedentesService: AntecedentesService) {}
    
    @Get()
    findAll() {
      return this.antecedentesService.getAntecedentes();
    }
    

    @Get('gineco')
    findAllGineco() {
      return this.antecedentesService.getAntecedentesGineco();
    }
}
