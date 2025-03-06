import { Test, TestingModule } from '@nestjs/testing';
import { HorarioTrabajoController } from './horario-trabajo.controller';

describe('HorarioTrabajoController', () => {
  let controller: HorarioTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorarioTrabajoController],
    }).compile();

    controller = module.get<HorarioTrabajoController>(HorarioTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
