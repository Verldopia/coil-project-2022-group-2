import { Order } from 'src/order/entities/order.entity';
import { UserMeta } from 'src/users-meta/entities/users-meta.entity';
export declare class User {
    id: number;
    userName: string;
    email?: string;
    password: string;
    userMeta?: UserMeta;
    orders?: Order[];
}
