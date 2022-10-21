import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { Lowercase } from '../hooks/TextTransform';
import { ProductsData } from '../interfaces';

export interface IResultsProps {}

const ResultsPage: React.FC<IResultsProps> = () => {
  const { title } = useParams();
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load products.</p>;

  const result = data?.Items.filter((item) =>
    Lowercase(item.title).includes(title ?? '')
  );

  return (
    <div className="container">
      <div className="product-container">
        {result && (
          <p className="product__total">
            {result.length} products found.
          </p>
        )}
        {result?.map((item, i) => (
          <ProductCard item={item} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
