import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
export declare class CategoriesResolver {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryInput: CreateCategoryInput): Promise<Category>;
    findAll(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    getCategoryTitle(title: string): Promise<Category>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): string;
    removeCategory(id: number): string;
}
