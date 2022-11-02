import { Item } from 'src/items/entities/item.entity';
export declare class Category {
    id: number;
    title: string;
    description: string;
    items?: Item[];
}
