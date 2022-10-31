import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiscountInput {
  @Field()
  code: string;

  @Field()
  description?: string;

  @Field()
  timesUsed?: number;

  @Field()
  discountPrice?: number;

  @Field()
  discountPercentage?: number;
}
