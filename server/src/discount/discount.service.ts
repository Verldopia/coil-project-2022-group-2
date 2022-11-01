import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscountInput } from './dto/create-discount.input';
import { Discount } from './entities/discount.entity';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(Discount)
    private discountRepository: Repository<Discount>
  ) {}

  // Find all discounts
  async findAll(): Promise<Discount[]> {
    return this.discountRepository.find();
  }

  create(createDiscountInput: CreateDiscountInput) {
    return 'This action adds a new discount';
  }

  getDiscount(code: string): Promise<Discount> {
    return this.discountRepository.findOneByOrFail({ code });
  }
}
