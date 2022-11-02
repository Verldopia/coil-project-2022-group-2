import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
export declare class AdminResolver {
    private adminsService;
    constructor(adminsService: AdminService);
    Admins(): Promise<Admin[]>;
    getAdmin(id: number): Promise<Admin>;
    createAdmin(createAdminInput: CreateAdminInput): Promise<Admin>;
}
