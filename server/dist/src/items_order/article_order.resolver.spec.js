"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const article_order_resolver_1 = require("./article_order.resolver");
const article_order_service_1 = require("./article_order.service");
describe('ArticleOrderResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [article_order_resolver_1.ArticleOrderResolver, article_order_service_1.ArticleOrderService],
        }).compile();
        resolver = module.get(article_order_resolver_1.ArticleOrderResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=article_order.resolver.spec.js.map