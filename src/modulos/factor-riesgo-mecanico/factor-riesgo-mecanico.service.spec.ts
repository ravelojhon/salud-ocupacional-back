import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoMecanicoService } from './factor-riesgo-mecanico.service';

describe('FactorRiesgoMecanicoService', () => {
  let service: FactorRiesgoMecanicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoMecanicoService],
    }).compile();

    service = module.get<FactorRiesgoMecanicoService>(FactorRiesgoMecanicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
