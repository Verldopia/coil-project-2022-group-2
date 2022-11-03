import { Test, TestingModule } from '@nestjs/testing';
import { ItemsOrderResolver } from './items_order.resolver';
import { ItemsOrderService } from './items_order.service';

describe('ItemsOrderResolver', () => {
  let resolver: ItemsOrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsOrderResolver, ItemsOrderService],
    }).compile();

    resolver = module.get<ItemsOrderResolver>(ItemsOrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
