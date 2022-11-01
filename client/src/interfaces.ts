// Categories
export interface Category {
  id: number;
  title: string;
  description: string;
}

export interface CategoryData {
  categories: Category[];
}

// Discount
export interface Discount {
  map(arg0: (row: any) => JSX.Element): import('react').ReactNode;
  getDiscount?: Discount;
  getAllDiscounts?: Discount;
  id: number;
  code: string;
  description?: string;
  discountPrice?: number;
  discountPercentage?: number;
  timesUsed?: number;
}

// CartItem
export interface CartItem {
  id: number;
  quantity: number;
}

// Products
export interface Product {
  id: number;
  title: string;
  price: number;
  popularity: number;
  mainImage: string;
  stock: number;
  archived: boolean;
  approved: boolean;
  description: string;
  categoryId: number;
  adminId: number;
  type: string;
  discountId: number;
  category?: Category;
}

export interface ProductsData {
  Items: Product[];
}

// Users
export interface User {
  id: number;
  userName: string;
  email: string;
}

export interface UsersData {
  accounts: User[];
}
