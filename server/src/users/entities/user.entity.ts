import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserMeta } from 'src/users-meta/entities/users-meta.entity';
import {
  Column,
  Entity,
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
  email: string;

  @Column()
  @Field()
  password: string;

  @OneToOne(() => UserMeta)
  @Field((type) => UserMeta)
  userMeta?: UserMeta;
}
