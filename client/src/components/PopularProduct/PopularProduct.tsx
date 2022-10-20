import React from 'react';
import { Lowercase } from '../../hooks/TextTransform';
import { Product, ProductsData } from '../../interfaces';
import ProductCard from '../ProductCard/ProductCard';

type PopularProductProps = {
  title: string;
  titleText: string;
  data: Product[];
};

const PopularProduct = ({
  title,
  titleText,
  data,
}: PopularProductProps) => {
  // Find 4 related products
  let relatedProduct = data?.Items.filter(
    (item: Product) =>
      Lowercase(item.category?.title) === title || 'sale'
  );

  return (
    <div className="container--preview">
      <h4>{titleText}</h4>
      <div className="product-container">
        {relatedProduct
          ?.map((item: Product, i: number) => (
            <ProductCard key={i} item={item} i={i} />
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default PopularProduct;
