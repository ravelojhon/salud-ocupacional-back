import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as mssql from 'mssql';
import conexion from './../../config/database';
import { CiudadService } from './ciudad.service';

@ApiTags('ciudad')
@Controller('ciudad')
export class CiudadController {
    constructor(private readonly ciudadService: CiudadService) {
        
     }

     @Get()
     findAll() {
       return this.ciudadService.getCiudades();
     }
}
