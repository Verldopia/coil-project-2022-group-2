import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoriesModule } from './categories/categories.module';
import { AdminModule } from './admin/admin.module';
import config from '../ormconfig';
import { UserMetaModule } from './users-meta/users-meta.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      introspection: true,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    TypeOrmModule.forRoot(config),
    ItemsModule,
    CategoriesModule,
    UsersModule,
    UserMetaModule,
    AdminModule,
    AuthModule,
    OrderModule,
    DiscountModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
