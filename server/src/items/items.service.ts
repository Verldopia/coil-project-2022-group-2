import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
    private categoriesService: CategoriesService,
  ) {}

  // Find all items
  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  // Find Item on ID
  getItem(id: number): Promise<Item> {
    return this.itemsRepository.findOneByOrFail({ id });
  }

  // Find Item Category
  getCategory(categoryId: number): Promise<Category> {
    return this.categoriesService.getCategory(categoryId);
  }

  // Create new instance
  createItem(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create(createItemInput);
    return this.itemsRepository.save(newItem);
  }
}
