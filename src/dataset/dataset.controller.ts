import { Controller, Get, Param } from '@nestjs/common';
import { DatasetService } from './dataset.service';

@Controller('api/dataset')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  @Get()
  getDatasets() {
    return this.datasetService.findAll();
  }

  @Get('crop/:crop')
  getDatasetsByCrop(@Param('crop') crop) {
    return this.datasetService.findByCrop(crop);
  }

  @Get('category/:category')
  getDatasetsByCategory(@Param('category') category) {
    return this.datasetService.findByCategory(category);
  }

  @Get('crop/:crop/category/:category')
  getDatasetsByCropAndCategory(@Param('crop') crop, @Param('category') category) {
    return this.datasetService.findByCropAndCategory(crop, category);
  }
}
