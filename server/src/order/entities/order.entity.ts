import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  orderDate: string;

  @Column()
  @Field()
  shipped: boolean;

  @Column()
  @Field()
  delivered: boolean;

  @Column()
  @Field()
  priceTotal: number;

  @Column()
  @Field((type) => Int)
  userId: number;

  @ManyToOne(() => User, (user) => user.id)
  @Field((type) => User)
  user: User;

  @ManyToMany(() => Item, (item) => item.orders)
  @JoinTable()
  items: Item[];
}
