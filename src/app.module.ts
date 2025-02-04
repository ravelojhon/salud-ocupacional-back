import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AspirantesService } from './modulos/aspirantes/aspirantes.service';
import { AspirantesController } from './modulos/aspirantes/aspirantes.controller';
import { AntecedentesController } from './modulos/antecedentes/antecedentes.controller';
import { AntecedentesService } from './modulos/antecedentes/antecedentes.service';
import { DiagnosticosController } from './modulos/diagnosticos/diagnosticos.controller';
import { DiagnosticosService } from './modulos/diagnosticos/diagnosticos.service';

@Module({
  imports: [],
  controllers: [AppController, AspirantesController, AntecedentesController, DiagnosticosController],
  providers: [AppService, AspirantesService, AntecedentesService, DiagnosticosService],
})
export class AppModule {}
