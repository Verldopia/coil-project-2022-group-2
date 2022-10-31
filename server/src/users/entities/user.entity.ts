import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/order/entities/order.entity';
import { UserMeta } from 'src/users-meta/entities/users-meta.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  userName: string;

  @Column()
  @Field()
  email?: string;

  @Column()
  @Field()
  password: string;

  @OneToOne(() => UserMeta)
  @Field((type) => UserMeta)
  userMeta?: UserMeta;

  @OneToMany(() => Order, (order) => order.user)
  @Field((type) => [Order], { nullable: true })
  orders?: Order[];
}
