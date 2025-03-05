import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FondoPensionesService } from './fondo-pensiones.service';

@ApiTags('Fondo de Pensiones')
@Controller('fondo-pensiones')
export class FondoPensionesController {
    constructor(private readonly fondoPensionesService: FondoPensionesService) {}

    @Get()
    async getFondoPensiones() {
        return await this.fondoPensionesService.getFondoPensiones();
    }
}