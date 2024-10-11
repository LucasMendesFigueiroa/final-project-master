import { Test, TestingModule } from '@nestjs/testing';
import { RevisoesService } from './revisoes.service';

describe('RevisoesService', () => {
  let service: RevisoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevisoesService],
    }).compile();

    service = module.get<RevisoesService>(RevisoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
