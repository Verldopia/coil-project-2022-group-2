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
exports.UserMetaService = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("typeorm");
const users_meta_entity_1 = require("./entities/users-meta.entity");
let UserMetaService = class UserMetaService {
    constructor(userMetaRepository, usersService) {
        this.userMetaRepository = userMetaRepository;
        this.usersService = usersService;
    }
    async findAll() {
        return this.userMetaRepository.find();
    }
    getUserMeta(id) {
        return this.userMetaRepository.findOneByOrFail({ id });
    }
    getUser(userId) {
        return this.usersService.getUser(userId);
    }
    createUserMeta(createUserMetaInput) {
        const newUserMeta = this.userMetaRepository.create(createUserMetaInput);
        return this.userMetaRepository.save(newUserMeta);
    }
};
UserMetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, dist_1.InjectRepository)(users_meta_entity_1.UserMeta)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService])
], UserMetaService);
exports.UserMetaService = UserMetaService;
//# sourceMappingURL=users-meta.service.js.map