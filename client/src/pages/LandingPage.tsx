import React from 'react';
import { useFetchProducts } from '../utilities';

import {
  NewestProduct,
  RelatedProduct,
  LandingHead,
} from '../components';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = (props) => {
  // Fetch products
  const data = useFetchProducts();

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
