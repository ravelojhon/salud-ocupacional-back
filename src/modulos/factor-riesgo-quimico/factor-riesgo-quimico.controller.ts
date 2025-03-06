import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoQuimicoService } from './factor-riesgo-quimico.service';

@ApiTags('Factor Riesgo Químico')
@Controller('factor-riesgo-quimico')
export class FactorRiesgoQuimicoController {
    constructor(private readonly factorRiesgoQuimicoService: FactorRiesgoQuimicoService) {}

    @Get()
    async getFactorRiesgoQuimico() {
        return await this.factorRiesgoQuimicoService.getFactorRiesgoQuimico();
    }
}
