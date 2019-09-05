import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ValueChainService {
  constructor(
  @InjectRepository(Category)
    private readonly valueChainRepository: Repository<Category>,
  ) {}

  async findAll() {
    const categories = await this.valueChainRepository.find({ relations: ['valueChain'] });
    const valueChains = {};
    categories.forEach((c) => {
      const { valueChain, ...category } = c;
      if (!valueChains[valueChain.id]) {
        valueChains[valueChain.id] = valueChain;
        valueChains[valueChain.id].categories = [category];
        return;
      }
      valueChains[valueChain.id].categories.push(category);
    });

    return Object.values(valueChains);
  }
}
