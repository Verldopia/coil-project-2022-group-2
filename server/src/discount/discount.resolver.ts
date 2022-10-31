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
  constructor(private readonly discountService: DiscountService) {}

  @Mutation(() => Discount)
  createDiscount(
    @Args('createDiscountInput')
    createDiscountInput: CreateDiscountInput
  ) {
    return this.discountService.create(createDiscountInput);
  }

  @Query(() => Discount, { name: 'discount' })
  getDiscount(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Discount> {
    return this.discountService.getDiscount(id);
  }
}
