import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActividadesEconomicasService } from './actividades-economicas.service';


@ApiTags('actividades-economicas')
@Controller('actividades-economicas')
export class ActividadesEconomicasController {
    constructor(private readonly actividadesEconomicasService: ActividadesEconomicasService) {}

    @Get()
    gerActividades() {
        return this.actividadesEconomicasService.gerActividades();
    }

}
