import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  // Find all orders
  @Query(() => [Order])
  getOrders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  //   Create new order
  @Mutation((returns) => Order)
  createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput
  ): Promise<Order> {
    return this.orderService.createOrder(createOrderInput);
  }

  @ResolveField((returns) => User)
  user(@Parent() order: Order): Promise<User> {
    return this.orderService.getUser(order.userId);
  }

  @Query(() => Order)
  getOrder(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Order> {
    return this.orderService.getOrder(id);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.remove(id);
  }
}
