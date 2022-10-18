export interface ProductCategory {
  name: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  categories?: ProductCategory[];
}

export interface ProductsData {
  Items: Product[];
}

export interface Account {
  id: number;
  userName: string;
}

export interface AccountsData {
  accounts: Account[];
}
