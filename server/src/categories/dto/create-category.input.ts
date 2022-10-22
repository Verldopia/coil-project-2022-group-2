import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  title: string;

    @Field()
  description: string;
}
