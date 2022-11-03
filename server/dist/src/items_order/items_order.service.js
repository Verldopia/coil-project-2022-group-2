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
exports.ItemsOrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const items_service_1 = require("../items/items.service");
const items_order_entity_1 = require("./entities/items_order.entity");
const order_service_1 = require("../order/order.service");
let ItemsOrderService = class ItemsOrderService {
    constructor(itemOrderRepository, itemService, orderService) {
        this.itemOrderRepository = itemOrderRepository;
        this.itemService = itemService;
        this.orderService = orderService;
    }
    createItemsOrder(createItemOrderInput) {
        const newItemOrder = this.itemOrderRepository.create(createItemOrderInput);
        return this.itemOrderRepository.save(newItemOrder);
    }
    findAll() {
        return this.itemOrderRepository.find();
    }
    findOne(orderId) {
        return this.itemOrderRepository.findOneByOrFail({
            orderId,
        });
    }
    findAllByOrderId(id) {
        return this.itemOrderRepository.find({
            where: { orderId: id },
        });
    }
    findAllByItemId(id) {
        return this.itemOrderRepository.find({
            where: { itemId: id },
        });
    }
    update(orderId, itemId, updateItemOrderInput) {
        const oldAddress = this.itemOrderRepository.findOneByOrFail({
            orderId,
            itemId,
        });
        const newAddress = Object.assign(Object.assign({}, oldAddress), updateItemOrderInput);
        return this.itemOrderRepository.save(newAddress);
    }
    remove(orderId, itemId) {
        return this.itemOrderRepository.delete({ orderId, itemId });
    }
    getItem(id) {
        return this.itemService.getItem(id);
    }
    getOrder(id) {
        return this.orderService.getOrder(id);
    }
};
ItemsOrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(items_order_entity_1.ItemOrder)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => items_service_1.ItemsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => order_service_1.OrderService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        items_service_1.ItemsService,
        order_service_1.OrderService])
], ItemsOrderService);
exports.ItemsOrderService = ItemsOrderService;
//# sourceMappingURL=items_order.service.js.map