import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dataset } from './entities/dataset.entity';

@Injectable()
export class DatasetService {
  constructor(
    @InjectRepository(Dataset)
        private readonly datasetRepository: Repository<Dataset>,
  ) {}

  findAll(): Promise<Dataset[]> {
    return this.datasetRepository.find({ relations: ['crop', 'category'] });
  }

  findByCrop(crop): Promise<Dataset[]> {
    return this.datasetRepository.createQueryBuilder('dataset')
      .leftJoinAndSelect('dataset.category', 'category')
      .leftJoinAndSelect('dataset.crop', 'crop')
      .where(`crop.${!isNaN(crop) ? 'id' : 'code_name'} = :crop`, { crop })
      .getMany();
  }

  findByCategory(category): Promise<Dataset[]> {
    return this.datasetRepository.createQueryBuilder('dataset')
      .leftJoinAndSelect('dataset.crop', 'crop')
      .leftJoinAndSelect('dataset.category', 'category')
      .where(`category.${!isNaN(category) ? 'id' : 'code_name'} = :category`, { category })
      .getMany();
  }

  findByCropAndCategory(crop, category): Promise<Dataset[]> {
    return this.datasetRepository.createQueryBuilder('dataset')
      .leftJoinAndSelect('dataset.crop', 'crop')
      .leftJoinAndSelect('dataset.category', 'category')
      .where(`crop.${!isNaN(crop) ? 'id' : 'code_name'} = :crop`, { crop })
      .andWhere(`category.${!isNaN(category) ? 'id' : 'code_name'} = :category`, { category })
      .getMany();
  }
}
