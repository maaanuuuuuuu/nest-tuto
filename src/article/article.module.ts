import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './article.service';
import { Article } from './models/article.model';
import { ArticleMutationResolver } from './resolvers/article.mutation.resolver';
import { ArticleQueriesResolver } from './resolvers/article.queries.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService, ArticleMutationResolver, ArticleQueriesResolver], // resolver in provider because https://github.com/nestjs/graphql/issues/645
})
export class ArticleModule {}
