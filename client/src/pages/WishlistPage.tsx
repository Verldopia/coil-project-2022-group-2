import React from 'react';
import Button from '../components/Button';
import Head from '../components/Head';
import Input from '../components/Input';
import ProductHead from '../components/ProductHead';
import { useQuery } from '@apollo/client';
import { ProductsData } from '../interfaces';
import { GET_ALL_PRODUCTS } from '../graphql/products';

export interface IWishlistPageProps {}

const WishlistPage: React.FC<IWishlistPageProps> = (props) => {
  /* gql */
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);

  return (
    <div>
      {/* gql */}
      <ul>
        {data?.Items.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
      {/* Demo donderdag */}
      {/* <Head title="title" isActive={true} />
      <ProductHead
        product={{ name: 'Dit is een product', price: 3 }}
      />
      <Button onClick={() => console.log('testing')}>Click Me</Button>
      <Input />*/}
    </div>
  );
};

export default WishlistPage;
