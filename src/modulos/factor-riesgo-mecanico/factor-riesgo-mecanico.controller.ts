import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoMecanicoService } from './factor-riesgo-mecanico.service';

@ApiTags('Factor Riesgo Mecánico')
@Controller('factor-riesgo-mecanico')
export class FactorRiesgoMecanicoController {
    constructor(private factorRiesgoMecanicoService: FactorRiesgoMecanicoService) {}

    @Get()
    async getFactorRiesgoMecanico() {
        return await this.factorRiesgoMecanicoService.getFactorRiesgoMecanico();
    }
}
