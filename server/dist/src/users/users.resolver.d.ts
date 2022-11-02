import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    getUserName(userName: string): Promise<User>;
}
