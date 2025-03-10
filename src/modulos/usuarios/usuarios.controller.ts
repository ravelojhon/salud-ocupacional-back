import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';

@ApiTags('Usuarios')
@Controller('api/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosServ: UsuariosService) {}

  @Post('/')
  listar(@Body() body: any) {
    return this.usuariosServ.listar(body);
  }

  @Post('/crear/')
  guardar(@Body() body: any) {
    return this.usuariosServ.guardar(body);
  }

  @Post('/editar/')
  editar(@Body() body: any) {
    return this.usuariosServ.editar(body);
  }

  @Post('/estado/')
  estado(@Body() body: any) {
    return this.usuariosServ.estado(body);
  }
}
