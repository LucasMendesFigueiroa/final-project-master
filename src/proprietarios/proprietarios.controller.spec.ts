import { Test, TestingModule } from '@nestjs/testing';
import { ProprietariosController } from './proprietarios.controller';
import { ProprietariosService } from './proprietarios.service';

describe('ProprietariosController', () => {
  let controller: ProprietariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProprietariosController],
      providers: [ProprietariosService],
    }).compile();

    controller = module.get<ProprietariosController>(ProprietariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
