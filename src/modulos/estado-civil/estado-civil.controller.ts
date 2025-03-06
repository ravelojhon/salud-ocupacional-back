import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EstadoCivilService } from './estado-civil.service';

@ApiTags('Estado Civil')
@Controller('estado-civil')
export class EstadoCivilController {
    constructor(private readonly estadoCivilService: EstadoCivilService) {}

    @Get()
    async getEstadoCivil() {
        return await this.estadoCivilService.getEstadoCivil();
    }
}