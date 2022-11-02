"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_resolver_1 = require("./auth.resolver");
const auth_service_1 = require("./auth.service");
describe('AuthResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [auth_resolver_1.AuthResolver, auth_service_1.AuthService],
        }).compile();
        resolver = module.get(auth_resolver_1.AuthResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=auth.resolver.spec.js.map