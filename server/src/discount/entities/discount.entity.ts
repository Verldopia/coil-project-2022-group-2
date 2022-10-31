import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
