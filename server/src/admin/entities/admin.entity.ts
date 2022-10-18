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
export class Admin {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  userName: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  telephone: number;

  @Column()
  @Field()
  type: string;

  @OneToMany(() => Item, (item) => item.admin)
  @Field((type) => [Item], { nullable: true })
  items?: Item[];
}
