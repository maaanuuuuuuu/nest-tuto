import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@InterfaceType()
export abstract class PaginatedEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Date)
  @CreateDateColumn()
  createAt: Date;

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date;
}
