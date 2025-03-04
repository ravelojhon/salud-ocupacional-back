import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoBiologicoController } from './factor-riesgo-biologico.controller';

describe('FactorRiesgoBiologicoController', () => {
  let controller: FactorRiesgoBiologicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorRiesgoBiologicoController],
    }).compile();

    controller = module.get<FactorRiesgoBiologicoController>(FactorRiesgoBiologicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
