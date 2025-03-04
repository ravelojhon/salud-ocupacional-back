import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FactorRiesgoPsicosocialService } from './factor-riesgo-psicosocial.service';

@ApiTags('Factor Riesgo Psicosocial')
@Controller('factor-riesgo-psicosocial')
export class FactorRiesgoPsicosocialController {
    constructor(private factorRiesgoPsicosocialService: FactorRiesgoPsicosocialService) {}

    @Get()
    async getFactorRiesgoPsicosocial() {
        return await this.factorRiesgoPsicosocialService.getFactorRiesgoPsicosocial();
    }
}
