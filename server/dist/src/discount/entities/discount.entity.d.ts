import { Item } from 'src/items/entities/item.entity';
export declare class Discount {
    id: number;
    code: string;
    description?: string;
    timesUsed?: number;
    discountPrice?: number;
    discountPercentage?: number;
    items?: Item[];
}
