import { Test, TestingModule } from '@nestjs/testing';
import { ActividadesEconomicasService } from './actividades-economicas.service';

describe('ActividadesEconomicasService', () => {
  let service: ActividadesEconomicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActividadesEconomicasService],
    }).compile();

    service = module.get<ActividadesEconomicasService>(ActividadesEconomicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
