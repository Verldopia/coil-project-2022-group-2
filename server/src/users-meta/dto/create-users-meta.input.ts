import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserMetaInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  country?: string;

  @Field((type) => Int)
  userId: number;
}
