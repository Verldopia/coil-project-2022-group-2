import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class ImperialStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userName: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(userName, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
