import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ElementosProteccionPersonalService } from './elementos-proteccion-personal.service';

@ApiTags('Elementos Proteccion Personal')
@Controller('elementos-proteccion-personal')
export class ElementosProteccionPersonalController {
    constructor(private readonly elementosProteccionPersonalService: ElementosProteccionPersonalService) {}

    @Get()
    findAll() {
        return this.elementosProteccionPersonalService.getElementosProteccionPersonal();
    }
}
