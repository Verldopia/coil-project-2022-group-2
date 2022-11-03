import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Admin } from 'src/admin/entities/admin.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Discount } from 'src/discount/entities/discount.entity';
import { Order } from 'src/order/entities/order.entity';
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
export class Item {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  stock: number;

  @Column()
  @Field()
  mainImage: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  popularity?: number;

  @Column()
  @Field()
  approved: boolean;

  @Column()
  @Field()
  archived: boolean;

  @Column()
  @Field()
  type: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  images?: string;

  @Column()
  @Field((type) => Int)
  categoryId: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  discountId?: number;

  @Column()
  @Field((type) => Int)
  adminId: number;

  @ManyToOne(() => Category, (category) => category.items)
  @Field((type) => Category)
  category: Category;

  @ManyToOne(() => Discount, (discount) => discount.items)
  @Field((type) => Discount, { nullable: true })
  discount?: Discount;

  @ManyToOne(() => Admin, (admin) => admin.items)
  @Field((type) => Admin)
  admin: Admin;

  @ManyToMany((type) => Order, (order) => order.items, {
    cascade: true,
  })
  orders?: Order[];
}
