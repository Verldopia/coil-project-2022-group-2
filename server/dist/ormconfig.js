"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: ['dist/src/db/migrations/*{.ts,.js}'],
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map