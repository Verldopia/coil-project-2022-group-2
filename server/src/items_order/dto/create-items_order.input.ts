import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateItemsOrderInput {
  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  itemId: number;

  @Field(() => Int)
  amount: number;
}
