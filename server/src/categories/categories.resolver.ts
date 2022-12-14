import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService
  ) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput')
    createCategoryInput: CreateCategoryInput
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  // Find one by ID
  @Query(() => Category)
  getCategory(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Category> {
    return this.categoriesService.getCategory(id);
  }

  // Find one by title
  @Query(() => Category)
  getCategoryTitle(
    @Args('title', { type: () => String }) title: string
  ): Promise<Category> {
    return this.categoriesService.getCategoryTitle(title);
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput')
    updateCategoryInput: UpdateCategoryInput
  ) {
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput
    );
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.remove(id);
  }
}
