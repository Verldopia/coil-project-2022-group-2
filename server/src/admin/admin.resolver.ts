import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private adminsService: AdminService) {}

  // Find all Admins
  @Query(() => [Admin])
  Admins(): Promise<Admin[]> {
    return this.adminsService.findAll();
  }

  // Find one by ID
  @Query(() => Admin)
  getAdmin(@Args('id', { type: () => Int }) id: number): Promise<Admin> {
    return this.adminsService.getAdmin(id);
  }

  //   Create new Admin
  @Mutation((returns) => Admin)
  createAdmin(
    @Args('createAdminInput') createAdminInput: CreateAdminInput,
  ): Promise<Admin> {
    return this.adminsService.createAdmin(createAdminInput);
  }
}
