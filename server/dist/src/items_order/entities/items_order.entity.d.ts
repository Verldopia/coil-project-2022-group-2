import { Order } from 'src/order/entities/order.entity';
import { Item } from 'src/items/entities/item.entity';
export declare class ItemOrder {
    orderId: number;
    order: Order;
    itemId: number;
    item: Item;
    amount: number;
}
