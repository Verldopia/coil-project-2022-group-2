import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { ImperialStrategy } from './imperial.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET', // Put in .env
      signOptions: { expiresIn: '1w' },
    }),
  ],
  providers: [AuthService, ImperialStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
