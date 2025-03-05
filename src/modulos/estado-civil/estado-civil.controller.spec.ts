import { Test, TestingModule } from '@nestjs/testing';
import { EstadoCivilController } from './estado-civil.controller';

describe('EstadoCivilController', () => {
  let controller: EstadoCivilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoCivilController],
    }).compile();

    controller = module.get<EstadoCivilController>(EstadoCivilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
