import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    userName: string,
    password: string
  ): Promise<User> {
    const user = await this.usersService.getUserName(userName);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        userName: user.userName,
        sub: user.id,
      }),
      user,
    };
  }

  async register(createUserInput: CreateUserInput) {
    const user = await this.usersService.getUserName(
      createUserInput.userName
    );
    if (user) {
      throw new Error('User already exists');
    }

    // Hash password
    const password = await bcrypt.hash(createUserInput.password, 10);

    return this.usersService.createUser({
      ...createUserInput,
      email: createUserInput.email,
      password,
    });
  }
}
