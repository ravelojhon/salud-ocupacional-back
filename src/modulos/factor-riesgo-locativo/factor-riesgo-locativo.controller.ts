import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoLocativoService } from './factor-riesgo-locativo.service';

@ApiTags('Factor Riesgo Locativo')
@Controller('factor-riesgo-locativo')
export class FactorRiesgoLocativoController {
    constructor(private readonly factorRiesgoLocativoService: FactorRiesgoLocativoService) {}

    @Get()
    findAll() {
        return this.factorRiesgoLocativoService.getFactorRiesgoLocativo();
    }
}
