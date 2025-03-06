import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoErgonomicoService } from './factor-riesgo-ergonomico.service';

describe('FactorRiesgoErgonomicoService', () => {
  let service: FactorRiesgoErgonomicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoErgonomicoService],
    }).compile();

    service = module.get<FactorRiesgoErgonomicoService>(FactorRiesgoErgonomicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
