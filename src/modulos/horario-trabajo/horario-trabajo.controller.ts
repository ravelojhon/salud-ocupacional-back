import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HorarioTrabajoService } from './horario-trabajo.service';

@ApiTags('Horario de Trabajo')
@Controller('horario-trabajo')
export class HorarioTrabajoController {
    constructor(private readonly horarioTrabajoService: HorarioTrabajoService) {}

    @Get()
    async getHorarioTrabajo() {
        return await this.horarioTrabajoService.getHorarioTrabajo();
    }
}