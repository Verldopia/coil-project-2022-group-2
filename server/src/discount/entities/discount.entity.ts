import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Item } from 'src/items/entities/item.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Discount {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  description?: string;

  @Column()
  @Field()
  timesUsed?: number;

  @Column()
  @Field()
  discountPrice?: number;

  @Column()
  @Field()
  discountPercentage?: number;

  @OneToMany(() => Item, (item) => item.discount)
  @Field((type) => [Item], { nullable: true })
  items?: Item[];
}
