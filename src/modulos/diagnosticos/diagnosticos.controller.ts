import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { DiagnosticosService } from './diagnosticos.service';

@ApiTags('diagnosticos')
@Controller('diagnosticos')
export class DiagnosticosController {

     constructor(private readonly diagnosticosService: DiagnosticosService) {}
        
        @Get()
        findAll() {
          return this.diagnosticosService.getDiagnosticos();
        }
        
        @Get('/:paramName')
        findAllGineco(@Param('paramName') paramName:string) {
          return this.diagnosticosService.getDiagnosticosByName(paramName);
        }

}
