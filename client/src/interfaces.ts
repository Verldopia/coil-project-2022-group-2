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
  mainImage: string;
  stock: number;
  archived: boolean;
  approved: boolean;
  description: string;
  categoryId: number;
  adminId: number;
  type: string;
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
