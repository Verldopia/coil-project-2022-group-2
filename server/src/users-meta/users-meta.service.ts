import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateUserMetaInput } from './dto/create-users-meta.input';
import { UserMeta } from './entities/users-meta.entity';

@Injectable()
export class UserMetaService {
  constructor(
    @InjectRepository(UserMeta)
    private userMetaRepository: Repository<UserMeta>,
    private usersService: UsersService,
  ) {}

  // Find all userMetas
  async findAll(): Promise<UserMeta[]> {
    return this.userMetaRepository.find();
  }

  // Find userMeta on ID
  getUserMeta(id: number): Promise<UserMeta> {
    return this.userMetaRepository.findOneByOrFail({ id });
  }

  // Find userMeta User
  getUser(userId: number): Promise<User> {
    return this.usersService.getUser(userId);
  }

  // Create new instance
  createUserMeta(createUserMetaInput: CreateUserMetaInput): Promise<UserMeta> {
    const newUserMeta = this.userMetaRepository.create(createUserMetaInput);
    return this.userMetaRepository.save(newUserMeta);
  }
}
