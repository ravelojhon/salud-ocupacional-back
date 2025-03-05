import { Test, TestingModule } from '@nestjs/testing';
import { HorarioTrabajoService } from './horario-trabajo.service';

describe('HorarioTrabajoService', () => {
  let service: HorarioTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorarioTrabajoService],
    }).compile();

    service = module.get<HorarioTrabajoService>(HorarioTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
