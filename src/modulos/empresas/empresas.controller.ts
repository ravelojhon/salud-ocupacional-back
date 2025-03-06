import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDTO } from './dto/empresas.dto';

@ApiTags('Empresas')
@Controller('empresas')
export class EmpresasController {
    constructor(private readonly empresasService: EmpresasService) { }

    @Get()
    findAll() {
        return this.empresasService.getEmpresas();
    }

    @Post()
    async createEmpresa(@Body() createEmpresaDTO: CreateEmpresaDTO) {
        return this.empresasService.createEmpresa(createEmpresaDTO);
    }

    @Patch()
    async editEmpresa(@Body() createEmpresaDTO: CreateEmpresaDTO) {
        return this.empresasService.editEmpresa(createEmpresaDTO);
    }

    @Get('getById/:EmpresaId')
    getCompanyById(@Param('EmpresaId') EmpresaId: number) {
        return this.empresasService.getCompanyById(EmpresaId);
    }

    @Get(':nit')
    calcularDv(@Param('nit') nit: string) {
        return this.empresasService.calcularDigitoVerificacion(nit);
    }


}
