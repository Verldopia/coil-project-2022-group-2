import { Admin } from 'src/admin/entities/admin.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { Order } from 'src/order/entities/order.entity';
export declare class Item {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    mainImage: string;
    popularity?: number;
    approved: boolean;
    archived: boolean;
    type: string;
    images?: string;
    categoryId: number;
    discountId?: number;
    adminId: number;
    category: Category;
    discount?: Discount;
    admin: Admin;
    orders?: Order[];
}
