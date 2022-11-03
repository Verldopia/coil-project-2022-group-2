"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const article_order_service_1 = require("./article_order.service");
describe('ArticleOrderService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [article_order_service_1.ArticleOrderService],
        }).compile();
        service = module.get(article_order_service_1.ArticleOrderService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=article_order.service.spec.js.map