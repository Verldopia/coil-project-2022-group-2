import { Repository } from 'typeorm';
import { CreateAdminInput } from './dto/create-admin.input';
import { Admin } from './entities/admin.entity';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<Admin>);
    findAll(): Promise<Admin[]>;
    getAdmin(id: number): Promise<Admin>;
    createAdmin(createAdminInput: CreateAdminInput): Promise<Admin>;
}
