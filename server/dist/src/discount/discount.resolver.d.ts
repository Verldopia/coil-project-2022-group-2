import { DiscountService } from './discount.service';
import { Discount } from './entities/discount.entity';
import { CreateDiscountInput } from './dto/create-discount.input';
export declare class DiscountResolver {
    private discountService;
    constructor(discountService: DiscountService);
    getAllDiscounts(): Promise<Discount[]>;
    createDiscount(createDiscountInput: CreateDiscountInput): string;
    getDiscount(code: string): Promise<Discount>;
}
