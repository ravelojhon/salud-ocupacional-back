import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoPsicosocialController } from './factor-riesgo-psicosocial.controller';

describe('FactorRiesgoPsicosocialController', () => {
  let controller: FactorRiesgoPsicosocialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoPsicosocialController],
    }).compile();

    controller = module.get<FactorRiesgoPsicosocialController>(FactorRiesgoPsicosocialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
