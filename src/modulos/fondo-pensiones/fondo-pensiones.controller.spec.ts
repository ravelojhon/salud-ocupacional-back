import { Test, TestingModule } from '@nestjs/testing';
import { FondoPensionesController } from './fondo-pensiones.controller';

describe('FondoPensionesController', () => {
  let controller: FondoPensionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FondoPensionesController],
    }).compile();

    controller = module.get<FondoPensionesController>(FondoPensionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
