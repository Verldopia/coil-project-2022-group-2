import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field()
  orderDate: string;

  @Field()
  shipped: boolean;

  @Field()
  delivered: boolean;

  @Field()
  priceTotal: number;

  @Field((type) => Int)
  userId: number;
}
