import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoElectricoService } from './factor-riesgo-electrico.service';

describe('FactorRiesgoElectricoService', () => {
  let service: FactorRiesgoElectricoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoElectricoService],
    }).compile();

    service = module.get<FactorRiesgoElectricoService>(FactorRiesgoElectricoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
