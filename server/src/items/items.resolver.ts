import {
  Args,
  Mutation,
  Query,
  Resolver,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Category } from 'src/categories/entities/category.entity';
import { CreateItemInput } from './dto/create-item.input';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  // Find all Items
  @Query(() => [Item])
  Items(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  // Find one by ID
  @Query(() => Item)
  getItem(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Item> {
    return this.itemsService.getItem(id);
  }

  //   Create new item
  @Mutation((returns) => Item)
  createItem(
    @Args('createItemInput') createItemInput: CreateItemInput
  ): Promise<Item> {
    return this.itemsService.createItem(createItemInput);
  }

  @ResolveField((returns) => Category)
  category(@Parent() item: Item): Promise<Category> {
    return this.itemsService.getCategory(item.categoryId);
  }
}
