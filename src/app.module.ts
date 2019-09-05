import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CropModule } from './crop/crop.module';
import { DatasetModule } from './dataset/dataset.module';
import { DatasetContentModule } from './dataset-content/dataset-content.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CategoryModule, CropModule, DatasetModule, DatasetContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
