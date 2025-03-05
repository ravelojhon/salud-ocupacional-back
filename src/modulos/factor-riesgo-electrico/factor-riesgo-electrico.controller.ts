import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoElectricoService } from './factor-riesgo-electrico.service';

@ApiTags('Factor Riesgo Eléctrico')
@Controller('factor-riesgo-electrico')
export class FactorRiesgoElectricoController {
    constructor(private readonly factorRiesgoElectricoService: FactorRiesgoElectricoService) {}

    @Get()
    findAll() {
        return this.factorRiesgoElectricoService.getFactorRiesgoElectrico();
    }
}
