import { Test, TestingModule } from '@nestjs/testing';
import { NivelEducativoController } from './nivel-educativo.controller';

describe('NivelEducativoController', () => {
  let controller: NivelEducativoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NivelEducativoController],
    }).compile();

    controller = module.get<NivelEducativoController>(NivelEducativoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
