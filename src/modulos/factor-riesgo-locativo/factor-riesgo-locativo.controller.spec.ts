import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoLocativoController } from './factor-riesgo-locativo.controller';

describe('FactorRiesgoLocativoController', () => {
  let controller: FactorRiesgoLocativoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoLocativoController],
    }).compile();

    controller = module.get<FactorRiesgoLocativoController>(FactorRiesgoLocativoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
