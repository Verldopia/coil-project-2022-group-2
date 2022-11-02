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
exports.ItemsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("../categories/entities/category.entity");
const create_item_input_1 = require("./dto/create-item.input");
const item_entity_1 = require("./entities/item.entity");
const items_service_1 = require("./items.service");
let ItemsResolver = class ItemsResolver {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    Items() {
        return this.itemsService.findAll();
    }
    getItem(id) {
        return this.itemsService.getItem(id);
    }
    createItem(createItemInput) {
        return this.itemsService.createItem(createItemInput);
    }
    category(item) {
        return this.itemsService.getCategory(item.categoryId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [item_entity_1.Item]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "Items", null);
__decorate([
    (0, graphql_1.Query)(() => item_entity_1.Item),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "getItem", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => item_entity_1.Item),
    __param(0, (0, graphql_1.Args)('createItemInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_input_1.CreateItemInput]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "createItem", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => category_entity_1.Category),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_entity_1.Item]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "category", null);
ItemsResolver = __decorate([
    (0, graphql_1.Resolver)(() => item_entity_1.Item),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsResolver);
exports.ItemsResolver = ItemsResolver;
//# sourceMappingURL=items.resolver.js.map