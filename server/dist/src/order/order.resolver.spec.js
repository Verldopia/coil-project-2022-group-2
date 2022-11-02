"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const order_resolver_1 = require("./order.resolver");
const order_service_1 = require("./order.service");
describe('OrderResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [order_resolver_1.OrderResolver, order_service_1.OrderService],
        }).compile();
        resolver = module.get(order_resolver_1.OrderResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=order.resolver.spec.js.map