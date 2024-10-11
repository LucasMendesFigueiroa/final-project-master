import { Test, TestingModule } from '@nestjs/testing';
import { ServicosMecanicosController } from './servicos_mecanicos.controller';
import { ServicosMecanicosService } from './servicos_mecanicos.service';

describe('ServicosMecanicosController', () => {
  let controller: ServicosMecanicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicosMecanicosController],
      providers: [ServicosMecanicosService],
    }).compile();

    controller = module.get<ServicosMecanicosController>(ServicosMecanicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
