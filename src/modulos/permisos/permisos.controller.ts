import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermisosService } from './permisos.service';

@ApiTags('Permisos')
@Controller('api/permisos')
export class PermisosController {
  constructor(private readonly permisoservice: PermisosService) {}

  @Post('/')
  listar(@Body() body: any) {
    return this.permisoservice.listar(body);
  }

  @Post('/crear/')
  guardar(@Body() body: any) {
    return this.permisoservice.guardar(body);
  }

  @Post('/editar/')
  editar(@Body() body: any) {
    return this.permisoservice.editar(body);
  }

  @Post('/editarMasivo/')
  editarMasivo(@Body() body: any) {
    return this.permisoservice.editarMasivo(body);
  }

  @Post('/estado/')
  estado(@Body() body: any) {
    return this.permisoservice.estado(body);
  }
}
