import { Controller, Get, Param } from '@nestjs/common';
import { CropService } from './crop.service';

@Controller('api/crop')
export class CropController {
  constructor(private readonly cropService: CropService) {}

  @Get()
  getCrops() {
    return this.cropService.findAll();
  }

  @Get(':crop')
  getCrop(@Param('crop') crop) {
    return this.cropService.findDatasets(crop);
  }
}
