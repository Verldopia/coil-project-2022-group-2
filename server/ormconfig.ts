import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // Not for production
  migrations: ['dist/src/db/migrations/*{.ts,.js}'],
};

export default config;
