import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EpsService } from './eps.service';

@ApiTags('EPS')
@Controller('eps')
export class EpsController {
    constructor(private readonly epsService: EpsService) {}

    @Get()
    async getEps() {
        return await this.epsService.getEps();
    }
}