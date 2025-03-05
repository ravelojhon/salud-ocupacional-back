import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegimenService } from './regimen.service';

@ApiTags('Regimen')
@Controller('regimen')
export class RegimenController {
    constructor(private readonly regimenService: RegimenService) {}
    @Get()
    findAll() {
      return this.regimenService.getRegimen();
    }
}
