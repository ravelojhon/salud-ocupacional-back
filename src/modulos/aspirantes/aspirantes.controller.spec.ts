import { Test, TestingModule } from '@nestjs/testing';
import { AspirantesController } from './aspirantes.controller';

describe('AspirantesController', () => {
  let controller: AspirantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AspirantesController],
    }).compile();

    controller = module.get<AspirantesController>(AspirantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
