import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UsersModule } from 'src/users/users.module';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    UsersModule,
    ItemsModule,
  ],

  providers: [OrderResolver, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
