import { Repository } from 'typeorm';
import { CreateDiscountInput } from './dto/create-discount.input';
import { Discount } from './entities/discount.entity';
export declare class DiscountService {
    private discountRepository;
    constructor(discountRepository: Repository<Discount>);
    findAll(): Promise<Discount[]>;
    create(createDiscountInput: CreateDiscountInput): string;
    getDiscount(code: string): Promise<Discount>;
}
