"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const items_order_resolver_1 = require("./items_order.resolver");
const items_order_service_1 = require("./items_order.service");
describe('ItemsOrderResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [items_order_resolver_1.ItemsOrderResolver, items_order_service_1.ItemsOrderService],
        }).compile();
        resolver = module.get(items_order_resolver_1.ItemsOrderResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=items_order.resolver.spec.js.map