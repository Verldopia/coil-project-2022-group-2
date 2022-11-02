"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const discount_service_1 = require("./discount.service");
const discount_entity_1 = require("./entities/discount.entity");
const create_discount_input_1 = require("./dto/create-discount.input");
let DiscountResolver = class DiscountResolver {
    constructor(discountService) {
        this.discountService = discountService;
    }
    getAllDiscounts() {
        return this.discountService.findAll();
    }
    createDiscount(createDiscountInput) {
        return this.discountService.create(createDiscountInput);
    }
    getDiscount(code) {
        return this.discountService.getDiscount(code);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [discount_entity_1.Discount]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscountResolver.prototype, "getAllDiscounts", null);
__decorate([
    (0, graphql_1.Mutation)(() => discount_entity_1.Discount),
    __param(0, (0, graphql_1.Args)('createDiscountInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discount_input_1.CreateDiscountInput]),
    __metadata("design:returntype", void 0)
], DiscountResolver.prototype, "createDiscount", null);
__decorate([
    (0, graphql_1.Query)(() => discount_entity_1.Discount),
    __param(0, (0, graphql_1.Args)('code', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountResolver.prototype, "getDiscount", null);
DiscountResolver = __decorate([
    (0, graphql_1.Resolver)(() => discount_entity_1.Discount),
    __metadata("design:paramtypes", [discount_service_1.DiscountService])
], DiscountResolver);
exports.DiscountResolver = DiscountResolver;
//# sourceMappingURL=discount.resolver.js.map