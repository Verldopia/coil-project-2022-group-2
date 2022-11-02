"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const discount_resolver_1 = require("./discount.resolver");
const discount_service_1 = require("./discount.service");
describe('DiscountResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [discount_resolver_1.DiscountResolver, discount_service_1.DiscountService],
        }).compile();
        resolver = module.get(discount_resolver_1.DiscountResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=discount.resolver.spec.js.map