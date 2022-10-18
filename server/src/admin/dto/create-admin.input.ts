import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
  @Field()
  userName: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  telephone: number;

  @Field()
  type: string;
}
