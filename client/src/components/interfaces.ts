export interface ProductCategory {
  name: string;
}

export interface Product {
  name: string;
  price: number;
  categories?: ProductCategory[];
}
