import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { User } from 'src/users/entities/user.entity';
export declare class OrderResolver {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(): Promise<Order[]>;
    createOrder(createOrderInput: CreateOrderInput): Promise<Order>;
    user(order: Order): Promise<User>;
    getOrder(id: number): Promise<Order>;
    removeOrder(id: number): string;
}
