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
import { EmpresasController } from './modulos/empresas/empresas.controller';
import { EmpresasService } from './modulos/empresas/empresas.service';
import { RegimenService } from './modulos/regimen/regimen.service';
import { RegimenController } from './modulos/regimen/regimen.controller';
import { ActividadesEconomicasController } from './modulos/actividades-economicas/actividades-economicas.controller';
import { ActividadesEconomicasService } from './modulos/actividades-economicas/actividades-economicas.service';
import { FactorRiesgoFisicoService } from './modulos/factor-riesgo-fisico/factor-riesgo-fisico.service';
import { FactorRiesgoFisicoController } from './modulos/factor-riesgo-fisico/factor-riesgo-fisico.controller';
import { FactorRiesgoQuimicoService } from './modulos/factor-riesgo-quimico/factor-riesgo-quimico.service';
import { FactorRiesgoQuimicoController } from './modulos/factor-riesgo-quimico/factor-riesgo-quimico.controller';
import { FactorRiesgoBiologicoService } from './modulos/factor-riesgo-biologico/factor-riesgo-biologico.service';
import { FactorRiesgoBiologicoController } from './modulos/factor-riesgo-biologico/factor-riesgo-biologico.controller';
import { FactorRiesgoErgonomicoService } from './modulos/factor-riesgo-ergonomico/factor-riesgo-ergonomico.service';
import { FactorRiesgoErgonomicoController } from './modulos/factor-riesgo-ergonomico/factor-riesgo-ergonomico.controller';
import { FactorRiesgoPsicosocialController } from './modulos/factor-riesgo-psicosocial/factor-riesgo-psicosocial.controller';
import { FactorRiesgoPsicosocialService } from './modulos/factor-riesgo-psicosocial/factor-riesgo-psicosocial.service';
import { FactorRiesgoMecanicoService } from './modulos/factor-riesgo-mecanico/factor-riesgo-mecanico.service';
import { FactorRiesgoMecanicoController } from './modulos/factor-riesgo-mecanico/factor-riesgo-mecanico.controller';
import { FactorRiesgoElectricoController } from './modulos/factor-riesgo-electrico/factor-riesgo-electrico.controller';
import { FactorRiesgoElectricoService } from './modulos/factor-riesgo-electrico/factor-riesgo-electrico.service';
import { FactorRiesgoLocativoService } from './modulos/factor-riesgo-locativo/factor-riesgo-locativo.service';
import { FactorRiesgoLocativoController } from './modulos/factor-riesgo-locativo/factor-riesgo-locativo.controller';
import { ElementosProteccionPersonalController } from './modulos/elementos-proteccion-personal/elementos-proteccion-personal.controller';
import { ElementosProteccionPersonalService } from './modulos/elementos-proteccion-personal/elementos-proteccion-personal.service';

@Module({
  imports: [],
  controllers: [AppController, AspirantesController, AntecedentesController, DiagnosticosController, HistoriaClinicaController, TipoDocumentosController, CiudadController, NivelEducativoController, EmpresasController, RegimenController, ActividadesEconomicasController, FactorRiesgoFisicoController, FactorRiesgoQuimicoController, FactorRiesgoBiologicoController, FactorRiesgoErgonomicoController, FactorRiesgoPsicosocialController, FactorRiesgoMecanicoController, FactorRiesgoElectricoController, FactorRiesgoLocativoController, ElementosProteccionPersonalController],
  providers: [AppService, AspirantesService, AntecedentesService, DiagnosticosService, HistoriaClinicaService, TipoDocumentosService, CiudadService, NivelEducativoService, EmpresasService, RegimenService, ActividadesEconomicasService, FactorRiesgoFisicoService, FactorRiesgoQuimicoService, FactorRiesgoBiologicoService, FactorRiesgoErgonomicoService, FactorRiesgoPsicosocialService, FactorRiesgoMecanicoService, FactorRiesgoElectricoService, FactorRiesgoLocativoService, ElementosProteccionPersonalService],
})
export class AppModule {}
