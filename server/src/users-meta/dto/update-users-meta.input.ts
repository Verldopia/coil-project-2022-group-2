import { CreateUserMetaInput } from './create-users-meta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserMetaInput extends PartialType(CreateUserMetaInput) {
  @Field(() => Int)
  id: number;
}
