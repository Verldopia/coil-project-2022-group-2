"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const items_order_service_1 = require("./items_order.service");
describe('ItemsOrderService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [items_order_service_1.ItemsOrderService],
        }).compile();
        service = module.get(items_order_service_1.ItemsOrderService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=items_order.service.spec.js.map