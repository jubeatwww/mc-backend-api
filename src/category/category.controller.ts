import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.findAll();
  }

  @Get(':category')
  getCategory(@Param('category') category) {
    return this.categoryService.findDatasets(category);
  }
}
