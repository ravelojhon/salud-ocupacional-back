import { Test, TestingModule } from '@nestjs/testing';
import { FactorRiesgoPsicosocialService } from './factor-riesgo-psicosocial.service';

describe('FactorRiesgoPsicosocialService', () => {
  let service: FactorRiesgoPsicosocialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorRiesgoPsicosocialService],
    }).compile();

    service = module.get<FactorRiesgoPsicosocialService>(FactorRiesgoPsicosocialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
