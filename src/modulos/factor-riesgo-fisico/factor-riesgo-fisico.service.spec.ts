import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoFisicoService } from './factor-riesgo-fisico.service';

describe('FactorRiesgoFisicoService', () => {
  let service: FactorRiesgoFisicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoFisicoService],
    }).compile();

    service = module.get<FactorRiesgoFisicoService>(FactorRiesgoFisicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
