import { Test, TestingModule } from '@nestjs/testing';
import { ActividadesEconomicasController } from './actividades-economicas.controller';

describe('ActividadesEconomicasController', () => {
  let controller: ActividadesEconomicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActividadesEconomicasController],
    }).compile();

    controller = module.get<ActividadesEconomicasController>(ActividadesEconomicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
