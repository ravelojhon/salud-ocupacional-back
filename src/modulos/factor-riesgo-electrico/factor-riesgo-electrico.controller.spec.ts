import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoElectricoController } from './factor-riesgo-electrico.controller';

describe('FactorRiesgoElectricoController', () => {
  let controller: FactorRiesgoElectricoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoElectricoController],
    }).compile();

    controller = module.get<FactorRiesgoElectricoController>(FactorRiesgoElectricoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
