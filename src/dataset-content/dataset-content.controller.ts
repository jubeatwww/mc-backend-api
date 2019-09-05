import { Controller, Get, Param } from '@nestjs/common';
import { DatasetContentService } from './dataset-content.service';

@Controller('api/dataset-content')
export class DatasetContentController {
  constructor(private readonly datasetContentService: DatasetContentService) {}

  @Get(':reference/:dataset')
  public getDatasetContent(@Param('reference') ref, @Param('dataset') dataset) {
    return this.datasetContentService.getContent(ref, dataset);
  }
}
