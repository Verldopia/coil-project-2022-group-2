import { forwardRef, Module } from '@nestjs/common';
import { ItemsOrderService } from './items_order.service';
import { ItemsOrderResolver } from './items_order.resolver';
import { ItemsModule } from 'src/items/items.module';
import { ItemOrder } from './entities/items_order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemOrder]),
    forwardRef(() => ItemsModule),
    forwardRef(() => OrderModule),
  ],
  providers: [ItemsOrderResolver, ItemsOrderService],
  exports: [ItemsOrderService],
})
export class ItemsOrderModule {}
