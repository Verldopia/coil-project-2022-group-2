import React from 'react';
import { Typography } from '@mui/material';
import { ProductsData } from '../../../interfaces';
import { ProductCard } from '../..';

type NewestProductProps = {
  titleText: string;
  data: ProductsData | undefined;
};

const NewestProduct = ({ titleText, data }: NewestProductProps) => {
  // Find 4 last added items
  const relatedProduct = data?.Items.slice(-4);

  return (
    <div className="container--preview">
      <h4></h4>
      <Typography variant="h5" mt={6} gutterBottom>
        {titleText}
      </Typography>
      <div className="product-container">
        {relatedProduct
          ?.map((item, i: number) => (
            <ProductCard key={i} item={item} i={i} />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default NewestProduct;
