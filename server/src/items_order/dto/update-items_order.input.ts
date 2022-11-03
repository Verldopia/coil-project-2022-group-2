import { CreateItemsOrderInput } from './create-items_order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemsOrderInput extends PartialType(
  CreateItemsOrderInput
) {
  @Field(() => Int)
  id: number;
}
