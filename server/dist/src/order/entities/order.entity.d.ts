import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Order {
    id: number;
    orderDate: string;
    shipped: boolean;
    delivered: boolean;
    priceTotal: number;
    userId?: number;
    user: User;
    items: Item[];
}
