import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  stock: number;

  @Field()
  mainImage: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  popularity?: number;

  @Field()
  approved: boolean;

  @Field()
  archived: boolean;

  @Field((type) => Int)
  categoryId: number;

  @Field((type) => Int)
  adminId: number;  

  @Field({ nullable: true })
  images?: string;

}
