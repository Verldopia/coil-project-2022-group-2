import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesService } from 'src/categories/categories.service';
export declare class ItemsService {
    private itemsRepository;
    private categoriesService;
    constructor(itemsRepository: Repository<Item>, categoriesService: CategoriesService);
    findAll(): Promise<Item[]>;
    getItem(id: number): Promise<Item>;
    getCategory(categoryId: number): Promise<Category>;
    createItem(createItemInput: CreateItemInput): Promise<Item>;
}
