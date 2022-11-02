import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    create(createCategoryInput: CreateCategoryInput): Promise<Category>;
    findAll(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    getCategoryTitle(title: string): Promise<Category>;
    update(id: number, updateCategoryInput: UpdateCategoryInput): string;
    remove(id: number): string;
}
