import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UsersService } from './users.service';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Find all Users
  @Query(() => [User], { name: 'users' })
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  // Find one user
  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getUser(id);
  }

  // Find one on userName
  @Query(() => User)
  getUserName(@Args('userName') userName: string) {
    console.log('init..');

    return this.usersService.getUserName(userName);
  }
}
