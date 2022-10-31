// import {
//   Controller,
//   Get,
//   Post,
//   Request,
//   UseGuards,
// } from '@nestjs/common';
// import { AuthService } from './auth/auth.service';
// import { ImperialGuard } from './auth/imperial.guard';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

// @Controller()
// export class AppController {
//   constructor(private readonly authService: AuthService) {}

//   @UseGuards(ImperialGuard)
//   @Post('login')
//   login(@Request() req): any {
//     return this.authService.login(req.user);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get('protected')
//   getHello(@Request() req): any {
//     return req.user;
//   }
// }
