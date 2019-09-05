import { Test, TestingModule } from '@nestjs/testing';
import { ValueChainService } from './value-chain.service';

describe('ValueChainService', () => {
  let service: ValueChainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValueChainService],
    }).compile();

    service = module.get<ValueChainService>(ValueChainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
