import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    getUserName(userName: string): Promise<User>;
    createUser(createUserInput: CreateUserInput): Promise<User>;
}
