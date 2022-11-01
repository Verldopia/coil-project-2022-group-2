import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private userService: UsersService
  ) {}

  // Find all orders
  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  // Create new order
  createOrder(createOrderInput: CreateOrderInput): Promise<Order> {
    const newOrder = this.orderRepository.create(createOrderInput);
    return this.orderRepository.save(newOrder);
  }

  // Find order User
  getUser(userId: number): Promise<User> {
    return this.userService.getUser(userId);
  }

  getOrder(id: number): Promise<Order> {
    return this.orderRepository.findOneByOrFail({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
