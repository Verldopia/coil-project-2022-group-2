import { Item } from 'src/items/entities/item.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @OneToMany(() => Item, (item) => item.category)
  @Field((type) => [Item], { nullable: true })
  items?: Item[];
}
