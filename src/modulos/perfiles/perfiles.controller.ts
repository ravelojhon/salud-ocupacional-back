import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PerfilesService } from './perfiles.service';

@ApiTags('Perfiles')
@Controller('api/perfiles')
export class PerfilesController {
  constructor(private readonly perfilesServ: PerfilesService) {}

  @Post('/')
  listar(@Body() body: any) {
    return this.perfilesServ.listar(body);
  }

  @Post('/crear/')
  guardar(@Body() body: any) {
    return this.perfilesServ.guardar(body);
  }

  @Post('/editar/')
  editar(@Body() body: any) {
    return this.perfilesServ.editar(body);
  }

  @Post('/estado/')
  estado(@Body() body: any) {
    return this.perfilesServ.estado(body);
  }
}
