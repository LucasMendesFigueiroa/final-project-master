import { Test, TestingModule } from '@nestjs/testing';
import { ServicosMecanicosService } from './servicos_mecanicos.service';

describe('ServicosMecanicosService', () => {
  let service: ServicosMecanicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicosMecanicosService],
    }).compile();

    service = module.get<ServicosMecanicosService>(ServicosMecanicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
