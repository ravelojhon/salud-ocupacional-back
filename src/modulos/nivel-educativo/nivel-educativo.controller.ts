import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { NivelEducativoService } from './nivel-educativo.service';

@ApiTags('nivel-educativo')
@Controller('nivel-educativo')
export class NivelEducativoController {
    constructor(private readonly nivelEducativoService: NivelEducativoService) {}

    @Get()
    async getNivelEducativo() {
        return await this.nivelEducativoService.getNivelEducativo();
    }
}
