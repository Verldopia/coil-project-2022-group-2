import React from 'react';
import { Lowercase } from '../../hooks/TextTransform';
import { ProductsData } from '../../interfaces';
import ProductCard from '../ProductCard/ProductCard';

type PopularProductProps = {
  title: string | undefined;
  titleText: string;
  data: ProductsData | undefined;
};

const PopularProduct = ({
  title,
  titleText,
  data,
}: PopularProductProps) => {
  // Find 4 related products
  let relatedProduct = data?.Items.filter(
    (item) => Lowercase(item.category?.title) === title || 'sale'
  );

  return (
    <div className="container--preview">
      <h4>{titleText}</h4>
      <div className="product-container">
        {relatedProduct
          ?.map((item, i: number) => (
            <ProductCard key={i} item={item} i={i} />
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default PopularProduct;
