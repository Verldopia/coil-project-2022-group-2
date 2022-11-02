import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
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
