import { Item } from 'src/items/entities/item.entity';
export declare class Admin {
    id: number;
    userName: string;
    password: string;
    email: string;
    telephone: number;
    type: string;
    items?: Item[];
}
