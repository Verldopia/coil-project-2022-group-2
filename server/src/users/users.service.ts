import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  // Find all Users
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Find User on ID
  getUser(id: number): Promise<User> {
    return this.usersRepository.findOneByOrFail({ id });
  }

  // Find User on userName
  getUserName(userName: string): Promise<User> {
    return this.usersRepository.findOneByOrFail({ userName });
  }

  // Create new instance
  createUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput);
    console.log(newUser);
    return this.usersRepository.save(newUser);
  }
}
