import { ArticleOrderService } from './article_order.service';
import { ArticleOrder } from './entities/article_order.entity';
import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';
import { Article } from 'src/articles/entities/article.entity';
import { Order } from '../orders/entities/order.entity';
export declare class ArticleOrderResolver {
    private readonly articleOrderService;
    constructor(articleOrderService: ArticleOrderService);
    createArticleOrder(createArticleOrderInput: CreateArticleOrderInput): Promise<ArticleOrder>;
    findAll(): Promise<ArticleOrder[]>;
    findOne(orderId: number, articleId: number): Promise<ArticleOrder>;
    article(articleOrder: ArticleOrder): Promise<Article>;
    order(articleOrder: ArticleOrder): Promise<Order>;
    updateArticleOrder(updateArticleOrderInput: UpdateArticleOrderInput): Promise<ArticleOrder>;
    removeArticleOrder(orderId: number, articleId: number): Promise<import("typeorm").DeleteResult>;
}
