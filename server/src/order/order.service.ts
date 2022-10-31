import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}

  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  getOrder(id: number): Promise<Order> {
    return this.orderRepository.findOneByOrFail({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
