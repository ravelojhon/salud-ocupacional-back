import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GrupoSanguineoService } from './grupo-sanguineo.service';

@ApiTags('Grupo Sanguíneo')
@Controller('grupo-sanguineo')
export class GrupoSanguineoController {
    constructor(private readonly grupoSanguineoService: GrupoSanguineoService) {}

    @Get()
    async getGrupoSanguineo() {
        return await this.grupoSanguineoService.getGrupoSanguineo();
    }
}