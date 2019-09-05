import { Test, TestingModule } from '@nestjs/testing';
import { DatasetContentService } from './dataset-content.service';

describe('DatasetContentService', () => {
  let service: DatasetContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatasetContentService],
    }).compile();

    service = module.get<DatasetContentService>(DatasetContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
