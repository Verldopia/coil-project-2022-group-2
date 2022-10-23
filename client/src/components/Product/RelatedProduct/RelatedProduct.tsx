import React from 'react';
import { Lowercase } from '../../../hooks/TextTransform';
import { Typography } from '@mui/material';
import { Product, ProductsData } from '../../../interfaces';
import { ProductCard } from '../..';

type RelatedProductProps = {
  id?: number | undefined;
  title: string | undefined | Product;
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

  // Sort products on popularity
  const sortedProduct = relatedProduct
    ?.filter((prod) => prod.popularity)
    .sort((c1, c2) => c2.popularity - c1.popularity);

  console.log(
    'Most popular items: ',
    sortedProduct
      ?.map((pro) => `${pro.title} - ${pro.popularity}`)
      .slice(0, 4)
  );

  return (
    <div className="container--preview">
      <Typography variant="h5" mt={6} gutterBottom>
        {titleText}
      </Typography>
      <div className="product-container">
        {/* create card with filtered data */}
        {sortedProduct
          ?.map((item, i: number) => (
            <ProductCard key={i} item={item} i={i} />
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default RelatedProduct;