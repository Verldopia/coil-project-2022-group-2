import React from 'react';
import { Product, ProductsData } from '../../interfaces';
import styles from './FilterProducts.module.css';

type FilterProps = {
  products: ProductsData;
};

function FilterProducts({ products }: FilterProps) {
  console.log(products);

  return (
    <div className={styles.productContainer}>
      <ul className={styles.productList}>
        <p>Filters</p>
        <br />
        {products &&
          products.map((product: Product) => (
            <li key={product.id}>{product.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default FilterProducts;
