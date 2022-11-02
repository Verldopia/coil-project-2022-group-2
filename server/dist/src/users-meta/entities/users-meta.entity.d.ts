import { User } from 'src/users/entities/user.entity';
export declare class UserMeta {
    id: number;
    firstName: string;
    lastName: string;
    address?: string;
    city?: string;
    country?: string;
    userId: number;
    user: User;
}
