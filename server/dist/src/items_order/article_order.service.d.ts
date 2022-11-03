import { CreateArticleOrderInput } from './dto/create-article_order.input';
import { UpdateArticleOrderInput } from './dto/update-article_order.input';
import { DeleteResult, Repository } from 'typeorm';
import { ArticleOrder } from './entities/article_order.entity';
import { ArticlesService } from '../articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { OrdersService } from '../orders/orders.service';
import { Order } from '../orders/entities/order.entity';
export declare class ArticleOrderService {
    private articleOrderRepository;
    private articlesService;
    private ordersService;
    constructor(articleOrderRepository: Repository<ArticleOrder>, articlesService: ArticlesService, ordersService: OrdersService);
    create(createArticleOrderInput: CreateArticleOrderInput): Promise<ArticleOrder>;
    findAll(): Promise<ArticleOrder[]>;
    findOne(orderId: number, articleId: number): Promise<ArticleOrder>;
    findAllByOrderId(id: number): Promise<ArticleOrder[]>;
    findAllByArticleId(id: number): Promise<ArticleOrder[]>;
    update(orderId: number, articleId: number, updateArticleOrderInput: UpdateArticleOrderInput): Promise<ArticleOrder>;
    remove(orderId: number, articleId: number): Promise<DeleteResult>;
    getArticle(id: number): Promise<Article>;
    getOrder(id: number): Promise<Order>;
}
