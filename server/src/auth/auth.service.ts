import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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

  async login(loginUserInput: LoginUserInput) {
    console.log('init....');

    const user = await this.usersService.getUserName(
      loginUserInput.userName
    );
    const { password, ...result } = user;

    return {
      //   access_token: this.jwtService.sign({
      //     userName: user.userName,
      //     sub: user.id,
      //   }),
      access_token: 'jwt',
      user: result,
    };
  }
}
