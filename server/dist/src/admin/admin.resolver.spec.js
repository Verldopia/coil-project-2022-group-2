"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const admin_resolver_1 = require("./admin.resolver");
const admin_service_1 = require("./admin.service");
describe('AdminResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [admin_resolver_1.AdminResolver, admin_service_1.AdminService],
        }).compile();
        resolver = module.get(admin_resolver_1.AdminResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=admin.resolver.spec.js.map