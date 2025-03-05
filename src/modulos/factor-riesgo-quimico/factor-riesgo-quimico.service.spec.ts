import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoQuimicoService } from './factor-riesgo-quimico.service';

describe('FactorRiesgoQuimicoService', () => {
  let service: FactorRiesgoQuimicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoQuimicoService],
    }).compile();

    service = module.get<FactorRiesgoQuimicoService>(FactorRiesgoQuimicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
