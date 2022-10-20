import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Article, FilterProducts, ProductCard } from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { Lowercase } from '../hooks/TextTransform';
import { ProductsData } from '../interfaces';

export interface ICategoriesProps {}

const Categories: React.FC<ICategoriesProps> = (props) => {
  let { title } = useParams();
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load products.</p>;

  let result = data?.Items.filter(
    (item) => Lowercase(item.category?.title) === title
  );

  return (
    <div className="container container--filter">
      <FilterProducts products={result} />
      <div className="product-container">
        {/* Total amount of products */}
        {result && (
          <p className="product__total">
            {result.length} products found.
          </p>
        )}
        {result?.map((item, i) => (
          <ProductCard key={i} item={item} i={i} />
        ))}
        <Article />
      </div>
    </div>
  );
};

export default Categories;
