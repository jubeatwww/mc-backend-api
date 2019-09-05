import { Test, TestingModule } from '@nestjs/testing';
import { DatasetContentController } from './dataset-content.controller';

describe('DatasetContent Controller', () => {
  let controller: DatasetContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatasetContentController],
    }).compile();

    controller = module.get<DatasetContentController>(DatasetContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
