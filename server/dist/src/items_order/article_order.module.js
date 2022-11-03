"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleOrderModule = void 0;
const common_1 = require("@nestjs/common");
const article_order_service_1 = require("./article_order.service");
const article_order_resolver_1 = require("./article_order.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const article_order_entity_1 = require("./entities/article_order.entity");
const articles_module_1 = require("../articles/articles.module");
const orders_module_1 = require("../orders/orders.module");
let ArticleOrderModule = class ArticleOrderModule {
};
ArticleOrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([article_order_entity_1.ArticleOrder]),
            (0, common_1.forwardRef)(() => articles_module_1.ArticlesModule),
            (0, common_1.forwardRef)(() => orders_module_1.OrdersModule),
        ],
        providers: [article_order_resolver_1.ArticleOrderResolver, article_order_service_1.ArticleOrderService],
        exports: [article_order_service_1.ArticleOrderService],
    })
], ArticleOrderModule);
exports.ArticleOrderModule = ArticleOrderModule;
//# sourceMappingURL=article_order.module.js.map