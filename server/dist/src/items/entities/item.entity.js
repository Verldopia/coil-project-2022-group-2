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
exports.Item = void 0;
const graphql_1 = require("@nestjs/graphql");
const admin_entity_1 = require("../../admin/entities/admin.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const discount_entity_1 = require("../../discount/entities/discount.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
let Item = class Item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Item.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Item.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "mainImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "popularity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Item.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Item.prototype, "archived", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Item.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Item.prototype, "discountId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Item.prototype, "adminId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.items),
    (0, graphql_1.Field)((type) => category_entity_1.Category),
    __metadata("design:type", category_entity_1.Category)
], Item.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => discount_entity_1.Discount, (discount) => discount.items),
    (0, graphql_1.Field)((type) => discount_entity_1.Discount, { nullable: true }),
    __metadata("design:type", discount_entity_1.Discount)
], Item.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.Admin, (admin) => admin.items),
    (0, graphql_1.Field)((type) => admin_entity_1.Admin),
    __metadata("design:type", admin_entity_1.Admin)
], Item.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => order_entity_1.Order, (order) => order.items, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)({ name: 'orders items' }),
    __metadata("design:type", Array)
], Item.prototype, "orders", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Item);
exports.Item = Item;
//# sourceMappingURL=item.entity.js.map