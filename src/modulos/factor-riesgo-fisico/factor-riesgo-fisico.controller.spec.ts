import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoFisicoController } from './factor-riesgo-fisico.controller';

describe('FactorRiesgoFisicoController', () => {
  let controller: FactorRiesgoFisicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoFisicoController],
    }).compile();

    controller = module.get<FactorRiesgoFisicoController>(FactorRiesgoFisicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
