"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const discount_service_1 = require("./discount.service");
describe('DiscountService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [discount_service_1.DiscountService],
        }).compile();
        service = module.get(discount_service_1.DiscountService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=discount.service.spec.js.map