import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
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
  if (error) return <p>There are no products</p>;
  console.log(data);

  let result = data?.Items.filter(
    (item) => Lowercase(item.category?.title) === title
  );

  console.log('title:', title);
  console.log('result:', result);

  return (
    <>
      <FilterProducts />
      <ul>
        {result?.map((item, i) => (
          <li key={i}>
            <p>{item.title}</p>
            <p>price: €{item.price}.00</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
