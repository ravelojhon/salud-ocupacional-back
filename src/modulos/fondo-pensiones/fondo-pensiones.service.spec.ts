import { Test, TestingModule } from '@nestjs/testing';
import { FondoPensionesService } from './fondo-pensiones.service';

describe('FondoPensionesService', () => {
  let service: FondoPensionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FondoPensionesService],
    }).compile();

    service = module.get<FondoPensionesService>(FondoPensionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
