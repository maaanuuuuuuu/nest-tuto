import { ObjectType, ID, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Article extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  image: string;
}
