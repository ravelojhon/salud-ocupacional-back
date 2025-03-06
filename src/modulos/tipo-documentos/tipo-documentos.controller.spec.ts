import { Test, TestingModule } from '@nestjs/testing';
import { TipoDocumentosController } from './tipo-documentos.controller';

describe('TipoDocumentosController', () => {
  let controller: TipoDocumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDocumentosController],
    }).compile();

    controller = module.get<TipoDocumentosController>(TipoDocumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
