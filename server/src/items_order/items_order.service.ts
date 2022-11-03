import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ItemsService } from 'src/items/items.service';
import { ItemOrder } from './entities/items_order.entity';
import { OrderService } from 'src/order/order.service';
import { CreateItemsOrderInput } from './dto/create-items_order.input';
import { UpdateItemsOrderInput } from './dto/update-items_order.input';
import { Item } from 'src/items/entities/item.entity';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class ItemsOrderService {
  constructor(
    @InjectRepository(ItemOrder)
    private itemOrderRepository: Repository<ItemOrder>,
    @Inject(forwardRef(() => ItemsService))
    private itemService: ItemsService,
    @Inject(forwardRef(() => OrderService))
    private orderService: OrderService
  ) {}

  createItemsOrder(
    createItemOrderInput: CreateItemsOrderInput
  ): Promise<ItemOrder> {
    const newItemOrder = this.itemOrderRepository.create(
      createItemOrderInput
    );
    return this.itemOrderRepository.save(newItemOrder);
  }

  findAll(): Promise<ItemOrder[]> {
    return this.itemOrderRepository.find();
  }

  findOne(orderId: number, itemId: number): Promise<ItemOrder> {
    return this.itemOrderRepository.findOneByOrFail({
      orderId,
      itemId,
    });
  }

  findAllByOrderId(id: number): Promise<ItemOrder[]> {
    return this.itemOrderRepository.find({
      where: { orderId: id },
    });
  }

  findAllByItemId(id: number): Promise<ItemOrder[]> {
    return this.itemOrderRepository.find({
      where: { itemId: id },
    });
  }

  update(
    orderId: number,
    itemId: number,
    updateItemOrderInput: UpdateItemsOrderInput
  ): Promise<ItemOrder> {
    const oldAddress = this.itemOrderRepository.findOneByOrFail({
      orderId,
      itemId,
    });
    const newAddress = { ...oldAddress, ...updateItemOrderInput };
    return this.itemOrderRepository.save(newAddress);
  }

  remove(orderId: number, itemId: number): Promise<DeleteResult> {
    return this.itemOrderRepository.delete({ orderId, itemId });
  }

  // Gets: Functions that execute another entity's service function.
  getItem(id: number): Promise<Item> {
    return this.itemService.getItem(id);
  }

  getOrder(id: number): Promise<Order> {
    return this.orderService.getOrder(id);
  }
}
