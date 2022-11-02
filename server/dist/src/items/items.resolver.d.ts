import { Category } from 'src/categories/entities/category.entity';
import { CreateItemInput } from './dto/create-item.input';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';
export declare class ItemsResolver {
    private itemsService;
    constructor(itemsService: ItemsService);
    Items(): Promise<Item[]>;
    getItem(id: number): Promise<Item>;
    createItem(createItemInput: CreateItemInput): Promise<Item>;
    category(item: Item): Promise<Category>;
}
