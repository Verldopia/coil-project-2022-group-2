import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import AddToCart from '../components/AddToCart/AddToCart';
import Article from '../components/Article/Article';
import FilterProducts from '../components/FilterProducts/FilterProducts';
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
    <div className="container">
      <FilterProducts />
      <div className="product-container">
        {result && (
          <p className="product__total">
            {result.length} products found.
          </p>
        )}
        {result?.map((item, i) => (
          <div className="product-item" key={i}>
            <div className="product__img"></div>
            <section className="product__text">
              <h4>{item.title}</h4>
              <span className="product__price">€{item.price}.-</span>
              <AddToCart />
            </section>
          </div>
        ))}
      </div>
      <Article />
    </div>
  );
};

export default Categories;
