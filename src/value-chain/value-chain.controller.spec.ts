import { Test, TestingModule } from '@nestjs/testing';
import { ValueChainController } from './value-chain.controller';

describe('ValueChain Controller', () => {
  let controller: ValueChainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValueChainController],
    }).compile();

    controller = module.get<ValueChainController>(ValueChainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
