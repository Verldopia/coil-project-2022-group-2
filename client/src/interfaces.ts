// Categories
export interface Category {
  id: number;
  title: string;
  description: string;
}

export interface CategoryData {
  categories: Category[];
}

// Products
export interface Product {
  id: number;
  title: string;
  price: number;
  popularity: number;
  stock: number;
  archived: boolean;
  approved: boolean;
  description: string;
  categoryId: number;
  adminId: number;
  category?: Category;
}

export interface ProductsData {
  Items: Product[];
}

// Accounts
export interface Account {
  id: number;
  userName: string;
}

export interface AccountsData {
  accounts: Account[];
}
