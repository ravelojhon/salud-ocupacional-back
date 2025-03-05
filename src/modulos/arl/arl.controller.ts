import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArlService } from './arl.service';

@ApiTags('ARL')
@Controller('arl')
export class ArlController {
    constructor(private readonly arlService: ArlService) {}

    @Get()
    async getArl() {
        return await this.arlService.getArl();
    }
}