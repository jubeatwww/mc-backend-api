import { Module } from '@nestjs/common';
import { DatasetContentController } from './dataset-content.controller';
import { DatasetContentService } from './dataset-content.service';

@Module({
  controllers: [DatasetContentController],
  providers: [DatasetContentService]
})
export class DatasetContentModule {}
