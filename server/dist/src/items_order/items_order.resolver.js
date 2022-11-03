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
exports.ItemsOrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const item_entity_1 = require("../items/entities/item.entity");
const order_entity_1 = require("../order/entities/order.entity");
const create_items_order_input_1 = require("./dto/create-items_order.input");
const update_items_order_input_1 = require("./dto/update-items_order.input");
const items_order_entity_1 = require("./entities/items_order.entity");
const items_order_service_1 = require("./items_order.service");
let ItemsOrderResolver = class ItemsOrderResolver {
    constructor(itemOrderService) {
        this.itemOrderService = itemOrderService;
    }
    createItemsOrder(createItemsOrderInput) {
        return this.itemOrderService.createItemsOrder(createItemsOrderInput);
    }
    findAll() {
        return this.itemOrderService.findAll();
    }
    findOne(orderId) {
        return this.itemOrderService.findOne(orderId);
    }
    item(itemOrder) {
        return this.itemOrderService.getItem(itemOrder.itemId);
    }
    order(itemOrder) {
        return this.itemOrderService.getOrder(itemOrder.orderId);
    }
    updateItemOrder(updateItemOrderInput) {
        return this.itemOrderService.update(updateItemOrderInput.orderId, updateItemOrderInput.itemId, updateItemOrderInput);
    }
    removeItemOrder(orderId, itemId) {
        return this.itemOrderService.remove(orderId, itemId);
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => items_order_entity_1.ItemOrder),
    __param(0, (0, graphql_1.Args)('createItemsOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_items_order_input_1.CreateItemsOrderInput]),
    __metadata("design:returntype", void 0)
], ItemsOrderResolver.prototype, "createItemsOrder", null);
__decorate([
    (0, graphql_1.Query)(() => [items_order_entity_1.ItemOrder], { name: 'itemOrders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsOrderResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => items_order_entity_1.ItemOrder, { name: 'itemOrder' }),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItemsOrderResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => item_entity_1.Item),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [items_order_entity_1.ItemOrder]),
    __metadata("design:returntype", Promise)
], ItemsOrderResolver.prototype, "item", null);
__decorate([
    (0, graphql_1.ResolveField)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [items_order_entity_1.ItemOrder]),
    __metadata("design:returntype", Promise)
], ItemsOrderResolver.prototype, "order", null);
__decorate([
    (0, graphql_1.Mutation)(() => items_order_entity_1.ItemOrder),
    __param(0, (0, graphql_1.Args)('updateItemOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_items_order_input_1.UpdateItemsOrderInput]),
    __metadata("design:returntype", void 0)
], ItemsOrderResolver.prototype, "updateItemOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => items_order_entity_1.ItemOrder),
    __param(0, (0, graphql_1.Args)('orderId', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('itemId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ItemsOrderResolver.prototype, "removeItemOrder", null);
ItemsOrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => items_order_entity_1.ItemOrder),
    __metadata("design:paramtypes", [items_order_service_1.ItemsOrderService])
], ItemsOrderResolver);
exports.ItemsOrderResolver = ItemsOrderResolver;
//# sourceMappingURL=items_order.resolver.js.map