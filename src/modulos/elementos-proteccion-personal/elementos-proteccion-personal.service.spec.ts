import { Test, TestingModule } from '@nestjs/testing';
import { ElementosProteccionPersonalService } from './elementos-proteccion-personal.service';

describe('ElementosProteccionPersonalService', () => {
  let service: ElementosProteccionPersonalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementosProteccionPersonalService],
    }).compile();

    service = module.get<ElementosProteccionPersonalService>(ElementosProteccionPersonalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
