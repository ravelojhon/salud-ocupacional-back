import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoMecanicoController } from './factor-riesgo-mecanico.controller';

describe('FactorRiesgoMecanicoController', () => {
  let controller: FactorRiesgoMecanicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoMecanicoController],
    }).compile();

    controller = module.get<FactorRiesgoMecanicoController>(FactorRiesgoMecanicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
