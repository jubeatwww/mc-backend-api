import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
      private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findDatasets(category): Promise<Category> {
    if (!isNaN(category)) {
      return this.categoryRepository.findOne(category, { relations: ['datasets'] });
    }
    return this.categoryRepository.findOne({ code_name: category }, { relations: ['datasets'] });
  }
}
