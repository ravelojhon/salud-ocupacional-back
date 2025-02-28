import { Test, TestingModule } from '@nestjs/testing';
import { TipoDocumentosService } from './tipo-documentos.service';

describe('TipoDocumentosService', () => {
  let service: TipoDocumentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDocumentosService],
    }).compile();

    service = module.get<TipoDocumentosService>(TipoDocumentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
