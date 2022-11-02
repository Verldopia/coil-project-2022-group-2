"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetaModule = void 0;
const common_1 = require("@nestjs/common");
const users_meta_service_1 = require("./users-meta.service");
const users_meta_resolver_1 = require("./users-meta.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const users_meta_entity_1 = require("./entities/users-meta.entity");
const users_module_1 = require("../users/users.module");
let UserMetaModule = class UserMetaModule {
};
UserMetaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_meta_entity_1.UserMeta]), users_module_1.UsersModule],
        providers: [users_meta_service_1.UserMetaService, users_meta_resolver_1.UserMetaResolver],
    })
], UserMetaModule);
exports.UserMetaModule = UserMetaModule;
//# sourceMappingURL=users-meta.module.js.map