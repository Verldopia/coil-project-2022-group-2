"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const categories_resolver_1 = require("./categories.resolver");
const categories_service_1 = require("./categories.service");
describe('CategoriesResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [categories_resolver_1.CategoriesResolver, categories_service_1.CategoriesService],
        }).compile();
        resolver = module.get(categories_resolver_1.CategoriesResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=categories.resolver.spec.js.map