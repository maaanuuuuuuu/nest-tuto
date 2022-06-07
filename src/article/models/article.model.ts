import { ObjectType, Field } from '@nestjs/graphql';
import { PaginatedEntity } from 'src/pagination/models/paginatedEntity.model';
import { Entity, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Article extends PaginatedEntity {
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
