import {
  ArgsType,
  Field,
  InputType,
  Int,
  InterfaceType,
  registerEnumType,
} from '@nestjs/graphql';
import { PaginatedEntity } from '../models/paginatedEntity.model';

export enum SortDirection {
  ASC,
  DESC,
}

registerEnumType(SortDirection, { name: 'SortDirection' });

@InputType()
export class PaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  createAt?: SortDirection;
}

ArgsType();
export class PaginationArgs {
  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}

@InterfaceType()
export abstract class Pagination<N extends PaginatedEntity = PaginatedEntity> {
  @Field()
  totalCount: number;

  @Field(() => [PaginatedEntity])
  abstract entities: N[];
}
