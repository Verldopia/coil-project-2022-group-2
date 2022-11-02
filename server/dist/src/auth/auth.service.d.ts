import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login-user.input';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(userName: string, password: string): Promise<User>;
    login(loginUserInput: LoginUserInput): Promise<{
        access_token: string;
        user: {
            id: number;
            userName: string;
            email?: string;
            userMeta?: import("../users-meta/entities/users-meta.entity").UserMeta;
            orders?: import("../order/entities/order.entity").Order[];
        };
    }>;
}
