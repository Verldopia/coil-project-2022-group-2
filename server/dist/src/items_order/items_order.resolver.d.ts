import { Item } from 'src/items/entities/item.entity';
import { Order } from 'src/order/entities/order.entity';
import { CreateItemsOrderInput } from './dto/create-items_order.input';
import { UpdateItemsOrderInput } from './dto/update-items_order.input';
import { ItemOrder } from './entities/items_order.entity';
import { ItemsOrderService } from './items_order.service';
export declare class ItemsOrderResolver {
    private readonly itemOrderService;
    constructor(itemOrderService: ItemsOrderService);
    createItemsOrder(createItemsOrderInput: CreateItemsOrderInput): Promise<ItemOrder>;
    findAll(): Promise<ItemOrder[]>;
    findOne(orderId: number): Promise<ItemOrder>;
    item(itemOrder: ItemOrder): Promise<Item>;
    order(itemOrder: ItemOrder): Promise<Order>;
    updateItemOrder(updateItemOrderInput: UpdateItemsOrderInput): Promise<ItemOrder>;
    removeItemOrder(orderId: number, itemId: number): Promise<import("typeorm").DeleteResult>;
}
