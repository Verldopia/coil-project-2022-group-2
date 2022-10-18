import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserMetaService } from './users-meta.service';
import { UserMeta } from './entities/users-meta.entity';
import { CreateUserMetaInput } from './dto/create-users-meta.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => UserMeta)
export class UserMetaResolver {
  constructor(private userMetaService: UserMetaService) {}

  // Find all UserMetas
  @Query(() => [UserMeta])
  UserMeta(): Promise<UserMeta[]> {
    return this.userMetaService.findAll();
  }

  // Find one by ID
  @Query(() => UserMeta)
  getUserMeta(@Args('id', { type: () => Int }) id: number): Promise<UserMeta> {
    return this.userMetaService.getUserMeta(id);
  }

  //   Create new UserMeta
  @Mutation((returns) => UserMeta)
  createUserMeta(
    @Args('createUserMetaInput') createUserMetaInput: CreateUserMetaInput,
  ): Promise<UserMeta> {
    return this.userMetaService.createUserMeta(createUserMetaInput);
  }

  @ResolveField((returns) => User)
  User(@Parent() userMeta: UserMeta): Promise<User> {
    return this.userMetaService.getUser(userMeta.userId);
  }
}
