import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminInput } from './dto/create-admin.input';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  // Find all Admins
  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  // Find Admin on ID
  getAdmin(id: number): Promise<Admin> {
    return this.adminRepository.findOneByOrFail({ id });
  }

  // Create new instance
  createAdmin(createAdminInput: CreateAdminInput): Promise<Admin> {
    const newAdmin = this.adminRepository.create(createAdminInput);
    return this.adminRepository.save(newAdmin);
  }
}
