import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ArticleCreateInput,
  ArticleCreateOutput,
} from './dto/article-create.dto';
import { ArticleDeleteOutput } from './dto/article-delete.dto';
import {
  ArticleUpdateInput,
  ArticleUpdateOutput,
} from './dto/article-update.dto';
import { Article } from './models/article.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async createArticle(input: ArticleCreateInput): Promise<ArticleCreateOutput> {
    const article = this.articleRepository.create(input);
    await article.save();
    return { article };
  }

  async updateArticle(
    articleId: Article['id'],
    input: ArticleUpdateInput,
  ): Promise<ArticleUpdateOutput> {
    const articleToUpdate = await this.articleRepository.findOneOrFail(
      articleId,
    );
    const updatedArticle = await this.articleRepository.save({
      ...articleToUpdate,
      ...input,
    });
    return { article: updatedArticle };
  }

  async deleteArticle(articleId: Article['id']): Promise<ArticleDeleteOutput> {
    const articleToDelete = await this.articleRepository.findOneOrFail(
      articleId,
    );
    await articleToDelete.remove();

    return { articleId };
  }

  async listArticles(): Promise<Article[]> {
    return this.articleRepository.find();
  }
}
