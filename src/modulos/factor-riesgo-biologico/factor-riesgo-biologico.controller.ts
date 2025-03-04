import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoBiologicoService } from './factor-riesgo-biologico.service';

@ApiTags('Factor Riesgo Biológico')
@Controller('factor-riesgo-biologico')
export class FactorRiesgoBiologicoController {
    constructor(private readonly factorRiesgoBiologicoService: FactorRiesgoBiologicoService) {}

    @Get()
    async getFactorRiesgoBiologico() {
        return await this.factorRiesgoBiologicoService.getFactorRiesgoBiologico();
    }
}
