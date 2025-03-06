import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoErgonomicoController } from './factor-riesgo-ergonomico.controller';

describe('FactorRiesgoErgonomicoController', () => {
  let controller: FactorRiesgoErgonomicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoErgonomicoController],
    }).compile();

    controller = module.get<FactorRiesgoErgonomicoController>(FactorRiesgoErgonomicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
