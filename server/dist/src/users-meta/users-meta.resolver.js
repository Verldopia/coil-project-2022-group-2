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
exports.UserMetaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_meta_service_1 = require("./users-meta.service");
const users_meta_entity_1 = require("./entities/users-meta.entity");
const create_users_meta_input_1 = require("./dto/create-users-meta.input");
const user_entity_1 = require("../users/entities/user.entity");
let UserMetaResolver = class UserMetaResolver {
    constructor(userMetaService) {
        this.userMetaService = userMetaService;
    }
    UserMeta() {
        return this.userMetaService.findAll();
    }
    getUserMeta(id) {
        return this.userMetaService.getUserMeta(id);
    }
    createUserMeta(createUserMetaInput) {
        return this.userMetaService.createUserMeta(createUserMetaInput);
    }
    User(userMeta) {
        return this.userMetaService.getUser(userMeta.userId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [users_meta_entity_1.UserMeta]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserMetaResolver.prototype, "UserMeta", null);
__decorate([
    (0, graphql_1.Query)(() => users_meta_entity_1.UserMeta),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserMetaResolver.prototype, "getUserMeta", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => users_meta_entity_1.UserMeta),
    __param(0, (0, graphql_1.Args)('createUserMetaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_meta_input_1.CreateUserMetaInput]),
    __metadata("design:returntype", Promise)
], UserMetaResolver.prototype, "createUserMeta", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_meta_entity_1.UserMeta]),
    __metadata("design:returntype", Promise)
], UserMetaResolver.prototype, "User", null);
UserMetaResolver = __decorate([
    (0, graphql_1.Resolver)(() => users_meta_entity_1.UserMeta),
    __metadata("design:paramtypes", [users_meta_service_1.UserMetaService])
], UserMetaResolver);
exports.UserMetaResolver = UserMetaResolver;
//# sourceMappingURL=users-meta.resolver.js.map