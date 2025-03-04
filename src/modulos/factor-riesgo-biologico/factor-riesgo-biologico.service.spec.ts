import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoBiologicoService } from './factor-riesgo-biologico.service';

describe('FactorRiesgoBiologicoService', () => {
  let service: FactorRiesgoBiologicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoBiologicoService],
    }).compile();

    service = module.get<FactorRiesgoBiologicoService>(FactorRiesgoBiologicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
