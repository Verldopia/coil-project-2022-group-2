import React from 'react';
import Head from './Head';
import { Product } from './interfaces';

type ProductHeadProps = {
  product: Product;
};

const ProductHead = ({ product }: ProductHeadProps) => {
  return <Head title={`Product: ${product.name}`} />;
};

export default ProductHead;
