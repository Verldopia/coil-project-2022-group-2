"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsOrderModule = void 0;
const common_1 = require("@nestjs/common");
const items_order_service_1 = require("./items_order.service");
const items_order_resolver_1 = require("./items_order.resolver");
const items_module_1 = require("../items/items.module");
const items_order_entity_1 = require("./entities/items_order.entity");
const typeorm_1 = require("@nestjs/typeorm");
const order_module_1 = require("../order/order.module");
let ItemsOrderModule = class ItemsOrderModule {
};
ItemsOrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([items_order_entity_1.ItemOrder]),
            (0, common_1.forwardRef)(() => items_module_1.ItemsModule),
            (0, common_1.forwardRef)(() => order_module_1.OrderModule),
        ],
        providers: [items_order_resolver_1.ItemsOrderResolver, items_order_service_1.ItemsOrderService],
        exports: [items_order_service_1.ItemsOrderService],
    })
], ItemsOrderModule);
exports.ItemsOrderModule = ItemsOrderModule;
//# sourceMappingURL=items_order.module.js.map