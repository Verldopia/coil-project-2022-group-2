import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Item } from 'src/items/entities/item.entity';

@Entity()
@ObjectType()
export class ItemOrder {
  @PrimaryColumn()
  @Field(() => Int)
  orderId: number;

  @ManyToOne(() => Order, (order) => order.items)
  @Field(() => Order)
  order: Order;

  @PrimaryColumn()
  @Field(() => Int)
  itemId: number;

  @ManyToOne(() => Item, (item) => item.orders)
  @Field(() => Item)
  item: Item;

  @Column()
  @Field(() => Int)
  amount: number;
}
