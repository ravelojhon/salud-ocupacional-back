import { Test, TestingModule } from '@nestjs/testing';
import { ElementosProteccionPersonalController } from './elementos-proteccion-personal.controller';

describe('ElementosProteccionPersonalController', () => {
  let controller: ElementosProteccionPersonalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementosProteccionPersonalController],
    }).compile();

    controller = module.get<ElementosProteccionPersonalController>(ElementosProteccionPersonalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
