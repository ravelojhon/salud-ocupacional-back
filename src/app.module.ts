import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AspirantesService } from './modulos/aspirantes/aspirantes.service';
import { AspirantesController } from './modulos/aspirantes/aspirantes.controller';
import { AntecedentesController } from './modulos/antecedentes/antecedentes.controller';
import { AntecedentesService } from './modulos/antecedentes/antecedentes.service';
import { DiagnosticosController } from './modulos/diagnosticos/diagnosticos.controller';
import { DiagnosticosService } from './modulos/diagnosticos/diagnosticos.service';
import { HistoriaClinicaService } from './modulos/historia-clinica/historia-clinica.service';
import { HistoriaClinicaController } from './modulos/historia-clinica/historia-clinica.controller';
import { TipoDocumentosService } from './modulos/tipo-documentos/tipo-documentos.service';
import { TipoDocumentosController } from './modulos/tipo-documentos/tipo-documentos.controller';
import { CiudadService } from './modulos/ciudad/ciudad.service';
import { CiudadController } from './modulos/ciudad/ciudad.controller';
import { NivelEducativoController } from './modulos/nivel-educativo/nivel-educativo.controller';
import { NivelEducativoService } from './modulos/nivel-educativo/nivel-educativo.service';

@Module({
  imports: [],
  controllers: [AppController, AspirantesController, AntecedentesController, DiagnosticosController, HistoriaClinicaController, TipoDocumentosController, CiudadController, NivelEducativoController],
  providers: [AppService, AspirantesService, AntecedentesService, DiagnosticosService, HistoriaClinicaService, TipoDocumentosService, CiudadService, NivelEducativoService],
})
export class AppModule {}
