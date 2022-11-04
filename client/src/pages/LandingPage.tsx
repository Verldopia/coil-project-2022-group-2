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
      <div id="step-1">
        <LandingHead />
      </div>

      {/* // 4 Globally most popular products */}
      <div id="step-5">
        <RelatedProduct
          titleText="Recommended products"
          data={data}
        />
      </div>

      {/* // 4 Newest products added to database */}
      <div id="step-6">
        <NewestProduct titleText="New arrivals" data={data} />
      </div>
    </div>
  );
};

export default LandingPage;
