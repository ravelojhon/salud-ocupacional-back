import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AspirantesService } from './modulos/aspirantes/aspirantes.service';
import { AspirantesController } from './modulos/aspirantes/aspirantes.controller';
import { AntecedentesController } from './modulos/antecedentes/antecedentes.controller';
import { AntecedentesService } from './modulos/antecedentes/antecedentes.service';

@Module({
  imports: [],
  controllers: [AppController, AspirantesController, AntecedentesController],
  providers: [AppService, AspirantesService, AntecedentesService],
})
export class AppModule {}
