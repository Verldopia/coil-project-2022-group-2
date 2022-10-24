import React from 'react';

//Styles
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { ProductsData } from '../interfaces';
import { useQuery } from '@apollo/client';
import {
  NewestProduct,
  RelatedProduct,
  LandingHead,
} from '../components';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = (props) => {
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't load products.</p>;
  return (
    <div className="container">
      <LandingHead />

      {/* // 4 Globally most popular products */}
      <RelatedProduct titleText="Recommended products" data={data} />

      {/* // 4 Newest products added to database */}
      <NewestProduct titleText="New arrivals" data={data} />
    </div>
  );
};

export default LandingPage;
