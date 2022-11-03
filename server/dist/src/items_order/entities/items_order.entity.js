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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemOrder = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("../../order/entities/order.entity");
const item_entity_1 = require("../../items/entities/item.entity");
let ItemOrder = class ItemOrder {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ItemOrder.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (order) => order.items),
    (0, graphql_1.Field)(() => order_entity_1.Order),
    __metadata("design:type", order_entity_1.Order)
], ItemOrder.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ItemOrder.prototype, "itemId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item, (item) => item.orders),
    (0, graphql_1.Field)(() => item_entity_1.Item),
    __metadata("design:type", item_entity_1.Item)
], ItemOrder.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ItemOrder.prototype, "amount", void 0);
ItemOrder = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], ItemOrder);
exports.ItemOrder = ItemOrder;
//# sourceMappingURL=items_order.entity.js.map