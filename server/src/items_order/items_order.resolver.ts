import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Item } from 'src/items/entities/item.entity';
import { Order } from 'src/order/entities/order.entity';
import { CreateItemsOrderInput } from './dto/create-items_order.input';
import { UpdateItemsOrderInput } from './dto/update-items_order.input';
import { ItemOrder } from './entities/items_order.entity';
import { ItemsOrderService } from './items_order.service';

@Resolver(() => ItemOrder)
export class ItemsOrderResolver {
  constructor(private readonly itemOrderService: ItemsOrderService) {}

  @Mutation((returns) => ItemOrder)
  createItemsOrder(
    @Args('createItemsOrderInput')
    createItemsOrderInput: CreateItemsOrderInput
  ) {
    return this.itemOrderService.createItemsOrder(
      createItemsOrderInput
    );
  }

  @Query(() => [ItemOrder], { name: 'itemOrders' })
  findAll() {
    return this.itemOrderService.findAll();
  }

  @Query(() => ItemOrder, { name: 'itemOrder' })
  findOne(@Args('orderId', { type: () => Int }) orderId: number) {
    return this.itemOrderService.findOne(orderId);
  }

  @ResolveField(() => Item)
  item(@Parent() itemOrder: ItemOrder): Promise<Item> {
    return this.itemOrderService.getItem(itemOrder.itemId);
  }

  @ResolveField(() => Order)
  order(@Parent() itemOrder: ItemOrder): Promise<Order> {
    return this.itemOrderService.getOrder(itemOrder.orderId);
  }

  @Mutation(() => ItemOrder)
  updateItemOrder(
    @Args('updateItemOrderInput')
    updateItemOrderInput: UpdateItemsOrderInput
  ) {
    return this.itemOrderService.update(
      updateItemOrderInput.orderId,
      updateItemOrderInput.itemId,
      updateItemOrderInput
    );
  }

  @Mutation(() => ItemOrder)
  removeItemOrder(
    @Args('orderId', { type: () => Int }) orderId: number,
    @Args('itemId', { type: () => Int }) itemId: number
  ) {
    return this.itemOrderService.remove(orderId, itemId);
  }
}
