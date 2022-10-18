import { Module } from '@nestjs/common';
import { UserMetaService } from './users-meta.service';
import { UserMetaResolver } from './users-meta.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMeta } from './entities/users-meta.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserMeta]), UsersModule],
  providers: [UserMetaService, UserMetaResolver],
})
export class UserMetaModule {}
