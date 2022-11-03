import { DeleteResult, Repository } from 'typeorm';
import { ItemsService } from 'src/items/items.service';
import { ItemOrder } from './entities/items_order.entity';
import { OrderService } from 'src/order/order.service';
import { CreateItemsOrderInput } from './dto/create-items_order.input';
import { UpdateItemsOrderInput } from './dto/update-items_order.input';
import { Item } from 'src/items/entities/item.entity';
import { Order } from 'src/order/entities/order.entity';
export declare class ItemsOrderService {
    private itemOrderRepository;
    private itemService;
    private orderService;
    constructor(itemOrderRepository: Repository<ItemOrder>, itemService: ItemsService, orderService: OrderService);
    createItemsOrder(createItemOrderInput: CreateItemsOrderInput): Promise<ItemOrder>;
    findAll(): Promise<ItemOrder[]>;
    findOne(orderId: number, itemId: number): Promise<ItemOrder>;
    findAllByOrderId(id: number): Promise<ItemOrder[]>;
    findAllByItemId(id: number): Promise<ItemOrder[]>;
    update(orderId: number, itemId: number, updateItemOrderInput: UpdateItemsOrderInput): Promise<ItemOrder>;
    remove(orderId: number, itemId: number): Promise<DeleteResult>;
    getItem(id: number): Promise<Item>;
    getOrder(id: number): Promise<Order>;
}
