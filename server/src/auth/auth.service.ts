import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<User> {
    const user = await this.usersService.getUserName(userName);

    if (user && user.password === password) {
      const { password, userName } = user;
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { userName: user.userName, id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
