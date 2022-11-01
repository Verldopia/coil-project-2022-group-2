import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';
import { DiscountService } from './discount.service';
import { Discount } from './entities/discount.entity';
import { CreateDiscountInput } from './dto/create-discount.input';

@Resolver(() => Discount)
export class DiscountResolver {
  constructor(private discountService: DiscountService) {}

  // Find all discounts
  @Query(() => [Discount])
  getAllDiscounts(): Promise<Discount[]> {
    return this.discountService.findAll();
  }

  @Mutation(() => Discount)
  createDiscount(
    @Args('createDiscountInput')
    createDiscountInput: CreateDiscountInput
  ) {
    return this.discountService.create(createDiscountInput);
  }

  @Query(() => Discount)
  getDiscount(
    @Args('code', { type: () => String }) code: string
  ): Promise<Discount> {
    return this.discountService.getDiscount(code);
  }
}
