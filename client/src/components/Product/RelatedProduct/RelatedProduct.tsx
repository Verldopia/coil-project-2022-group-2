import React from 'react';
import { Lowercase } from '../../../hooks/TextTransform';
import { Typography } from '@mui/material';
import { ProductsData } from '../../../interfaces';
import { ProductCard } from '../..';

type RelatedProductProps = {
  id?: number | undefined;
  title: string | undefined;
  titleText: string;
  data: ProductsData | undefined;
};

const RelatedProduct = ({
  id,
  title,
  titleText,
  data,
}: RelatedProductProps) => {
  // Find 4 related products
  const relatedProduct = data?.Items.filter(
    (item) =>
      Lowercase(item.category?.title) === title && item.id !== id
  );

  return (
    <div className="container--preview">
      <Typography variant="h5" mt={6} gutterBottom>
        {titleText}
      </Typography>
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

export default RelatedProduct;
