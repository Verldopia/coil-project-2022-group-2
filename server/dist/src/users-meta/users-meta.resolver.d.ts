import { UserMetaService } from './users-meta.service';
import { UserMeta } from './entities/users-meta.entity';
import { CreateUserMetaInput } from './dto/create-users-meta.input';
import { User } from 'src/users/entities/user.entity';
export declare class UserMetaResolver {
    private userMetaService;
    constructor(userMetaService: UserMetaService);
    UserMeta(): Promise<UserMeta[]>;
    getUserMeta(id: number): Promise<UserMeta>;
    createUserMeta(createUserMetaInput: CreateUserMetaInput): Promise<UserMeta>;
    User(userMeta: UserMeta): Promise<User>;
}
