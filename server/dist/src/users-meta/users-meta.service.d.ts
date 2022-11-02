import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateUserMetaInput } from './dto/create-users-meta.input';
import { UserMeta } from './entities/users-meta.entity';
export declare class UserMetaService {
    private userMetaRepository;
    private usersService;
    constructor(userMetaRepository: Repository<UserMeta>, usersService: UsersService);
    findAll(): Promise<UserMeta[]>;
    getUserMeta(id: number): Promise<UserMeta>;
    getUser(userId: number): Promise<User>;
    createUserMeta(createUserMetaInput: CreateUserMetaInput): Promise<UserMeta>;
}
