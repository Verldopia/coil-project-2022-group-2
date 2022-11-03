"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleOrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const article_order_service_1 = require("./article_order.service");
const article_order_entity_1 = require("./entities/article_order.entity");
const create_article_order_input_1 = require("./dto/create-article_order.input");
const update_article_order_input_1 = require("./dto/update-article_order.input");
const article_entity_1 = require("src/articles/entities/article.entity");
const order_entity_1 = require("../orders/entities/order.entity");
let ArticleOrderResolver = class ArticleOrderResolver {
    constructor(articleOrderService) {
        this.articleOrderService = articleOrderService;
    }
    createArticleOrder(createArticleOrderInput) {
        return this.articleOrderService.create(createArticleOrderInput);
    }
    findAll() {
        return this.articleOrderService.findAll();
    }
    findOne(orderId, articleId) {
        return this.articleOrderService.findOne(orderId, articleId);
    }
    article(articleOrder) {
        return this.articleOrderService.getArticle(articleOrder.articleId);
    }
    order(articleOrder) {
        return this.articleOrderService.getOrder(articleOrder.orderId);
    }
    updateArticleOrder(updateArticleOrderInput) {
        return this.articleOrderService.update(updateArticleOrderInput.orderId, updateArticleOrderInput.articleId, updateArticleOrderInput);
    }
    removeArticleOrder(orderId, articleId) {
        return this.articleOrderService.remove(orderId, articleId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => article_order_entity_1.ArticleOrder),
    __param(0, (0, graphql_1.Args)('createArticleOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_article_order_input_1.CreateArticleOrderInput !== "undefined" && create_article_order_input_1.CreateArticleOrderInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], ArticleOrderResolver.prototype, "createArticleOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [article_order_entity_1.ArticleOrder], { name: 'articleOrder' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticleOrderResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => article_order_entity_1.ArticleOrder, { name: 'articleOrder' }),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('articleId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ArticleOrderResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => article_entity_1.Article),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof article_order_entity_1.ArticleOrder !== "undefined" && article_order_entity_1.ArticleOrder) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ArticleOrderResolver.prototype, "article", null);
__decorate([
    (0, graphql_1.ResolveField)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof article_order_entity_1.ArticleOrder !== "undefined" && article_order_entity_1.ArticleOrder) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ArticleOrderResolver.prototype, "order", null);
__decorate([
    (0, graphql_1.Mutation)(() => article_order_entity_1.ArticleOrder),
    __param(0, (0, graphql_1.Args)('updateArticleOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof update_article_order_input_1.UpdateArticleOrderInput !== "undefined" && update_article_order_input_1.UpdateArticleOrderInput) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ArticleOrderResolver.prototype, "updateArticleOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => article_order_entity_1.ArticleOrder),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('articleId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ArticleOrderResolver.prototype, "removeArticleOrder", null);
ArticleOrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => article_order_entity_1.ArticleOrder),
    __metadata("design:paramtypes", [article_order_service_1.ArticleOrderService])
], ArticleOrderResolver);
exports.ArticleOrderResolver = ArticleOrderResolver;
//# sourceMappingURL=article_order.resolver.js.map