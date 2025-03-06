import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { TipoDocumentosService } from './tipo-documentos.service';

@ApiTags('tipo-documentos')
@Controller('tipo-documentos')
export class TipoDocumentosController {
    constructor(private readonly tipoDocumentosService: TipoDocumentosService) {}

    @Get()
    findAll() {
      return this.tipoDocumentosService.getTipoDocumentos();
    }
}