import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Find all Users
  @Query(() => [User])
  Users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Find one user
  @Query(() => User)
  getUser(@Args('id', { type: () => String }) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  //   Create new User
  @Mutation((returns) => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }
}
