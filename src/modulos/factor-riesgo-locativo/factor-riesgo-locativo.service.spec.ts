import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoLocativoService } from './factor-riesgo-locativo.service';

describe('FactorRiesgoLocativoService', () => {
  let service: FactorRiesgoLocativoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoLocativoService],
    }).compile();

    service = module.get<FactorRiesgoLocativoService>(FactorRiesgoLocativoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
