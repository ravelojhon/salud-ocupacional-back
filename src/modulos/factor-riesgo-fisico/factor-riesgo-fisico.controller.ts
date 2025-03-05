import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoFisicoService } from './factor-riesgo-fisico.service';

@ApiTags('Factor Riesgo Fisico')
@Controller('factor-riesgo-fisico')
export class FactorRiesgoFisicoController {
    constructor(private readonly factorRiesgoFisicoService: FactorRiesgoFisicoService) {}

    @Get()
    findAll() {
        return this.factorRiesgoFisicoService.getFactorRiesgoFisico();
    }
}
