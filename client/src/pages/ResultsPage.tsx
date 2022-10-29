import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Popular, ProductCard } from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { Lowercase } from '../utilities/TextTransform';
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

  const result = data?.Items.filter(
    (item) =>
      Lowercase(item.title).includes(title ?? '') ||
      (Lowercase(item.type).includes(title ?? '') && item.approved)
  );

  return (
    <div className="container">
      <ul className="product-container">
        {result?.[0] && (
          <p className="product__total">
            {result.length} products found.
          </p>
        )}
        {result?.[0] ? (
          result.map((item, i) => (
            <ProductCard key={item.id} item={item} i={i} />
          ))
        ) : (
          <div className="form-container">
            <p>There seem to be no results for '{title}'. </p>
            <p>You can search for products by their title or type.</p>
            <Popular />
          </div>
        )}
      </ul>
    </div>
  );
};

export default ResultsPage;
