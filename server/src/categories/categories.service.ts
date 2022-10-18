import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  create(createCategoryInput: CreateCategoryInput) {
    const newCategory = this.categoriesRepository.create(createCategoryInput);
    return this.categoriesRepository.save(newCategory);
  }

  // Find all items
  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  // Find Category on ID
  getCategory(id: number): Promise<Category> {
    return this.categoriesRepository.findOneByOrFail({ id });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
