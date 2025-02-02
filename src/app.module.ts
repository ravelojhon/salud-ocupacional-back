import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AspirantesService } from './modulos/aspirantes/aspirantes.service';
import { AspirantesController } from './modulos/aspirantes/aspirantes.controller';

@Module({
  imports: [],
  controllers: [AppController, AspirantesController],
  providers: [AppService, AspirantesService],
})
export class AppModule {}
