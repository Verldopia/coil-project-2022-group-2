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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_service_1 = require("./order.service");
const order_entity_1 = require("./entities/order.entity");
const create_order_input_1 = require("./dto/create-order.input");
const user_entity_1 = require("../users/entities/user.entity");
let OrderResolver = class OrderResolver {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getOrders() {
        return this.orderService.findAll();
    }
    createOrder(createOrderInput) {
        return this.orderService.createOrder(createOrderInput);
    }
    user(order) {
        return this.orderService.getUser(order.userId);
    }
    getOrder(id) {
        return this.orderService.getOrder(id);
    }
    removeOrder(id) {
        return this.orderService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [order_entity_1.Order]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('createOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Query)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "removeOrder", null);
OrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_entity_1.Order),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.resolver.js.map