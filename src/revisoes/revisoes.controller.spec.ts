import { Test, TestingModule } from '@nestjs/testing';
import { RevisoesController } from './revisoes.controller';
import { RevisoesService } from './revisoes.service';

describe('RevisoesController', () => {
  let controller: RevisoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevisoesController],
      providers: [RevisoesService],
    }).compile();

    controller = module.get<RevisoesController>(RevisoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
