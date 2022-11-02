import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './entities/order.entity';
export declare class OrderService {
    private orderRepository;
    private userService;
    constructor(orderRepository: Repository<Order>, userService: UsersService);
    findAll(): Promise<Order[]>;
    createOrder(createOrderInput: CreateOrderInput): Promise<Order>;
    getUser(userId: number): Promise<User>;
    getOrder(id: number): Promise<Order>;
    remove(id: number): string;
}
