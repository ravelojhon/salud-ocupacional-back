import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoQuimicoController } from './factor-riesgo-quimico.controller';

describe('FactorRiesgoQuimicoController', () => {
  let controller: FactorRiesgoQuimicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoQuimicoController],
    }).compile();

    controller = module.get<FactorRiesgoQuimicoController>(FactorRiesgoQuimicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
