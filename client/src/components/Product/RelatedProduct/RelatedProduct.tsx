import React from 'react';
import { Lowercase } from '../../../utilities/TextTransform';
import { Typography } from '@mui/material';
import { Product, ProductsData } from '../../../interfaces';
import { ProductCard } from '../../../components';

type RelatedProductProps = {
  id?: number | undefined;
  title?: string | undefined | Product;
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
  let relatedProduct = data?.Items.filter(
    (item) =>
      Lowercase(item.category?.title) === title && item.id !== id
  );

  // If there's no specific category, display all products (for landing page)
  if (!title) {
    relatedProduct = data?.Items;
  }

  // Sort products on popularity
  const sortedProduct = relatedProduct
    ?.filter((prod) => prod.popularity)
    .sort((c1, c2) => c2.popularity - c1.popularity)
    .slice(0, 4);

  console.table(sortedProduct);

  return (
    <div className="container--preview">
      <Typography variant="h5" mt={6} gutterBottom>
        {titleText}
      </Typography>
      <div className="product-container">
        {/* // create card with filtered data */}
        {sortedProduct?.map((item, i: number) => (
          <ProductCard key={i} item={item} i={i} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
