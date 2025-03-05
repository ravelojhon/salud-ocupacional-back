import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoErgonomicoService } from './factor-riesgo-ergonomico.service';

@ApiTags('Factor Riesgo Ergonomico')
@Controller('factor-riesgo-ergonomico')
export class FactorRiesgoErgonomicoController {
    constructor(private readonly factorRiesgoErgonomicoService: FactorRiesgoErgonomicoService) {}

    @Get()
    async getFactorRiesgoErgonomico() {
        return await this.factorRiesgoErgonomicoService.getFactorRiesgoErgonomico();
    }
}
