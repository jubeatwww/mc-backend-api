import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crop } from './entities/crop.entity';

@Injectable()
export class CropService {
  constructor(
  @InjectRepository(Crop)
    private readonly cropRepository: Repository<Crop>,
  ) {}

  findAll(): Promise<Crop[]> {
    return this.cropRepository.find();
  }

  findDatasets(crop): Promise<Crop> {
    if (!isNaN(crop)) {
      return this.cropRepository.findOne(crop, { relations: ['datasets'] });
    }
    return this.cropRepository.findOne({ code_name: crop }, { relations: ['datasets'] });
  }
}
