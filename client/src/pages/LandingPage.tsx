import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import React, { useState } from 'react';
import { useFetchProducts } from '../utilities';
import { LandingSteps } from '../constants';

import {
  NewestProduct,
  RelatedProduct,
  LandingHead,
} from '../components';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = (props) => {
  // Fetch products
  const data = useFetchProducts();
  const [enabled, setEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);

  const onExit = () => {
    localStorage.setItem('tutorial-1', '1');
    setEnabled(false);
  };

  // Check if tutorial has already been shown
  const tutorial_1 = localStorage.getItem('tutorial-1');

  return (
    <div className="container">
      {!tutorial_1 && (
        <div className="App">
          <Steps
            enabled={enabled}
            steps={LandingSteps}
            initialStep={initialStep}
            onExit={onExit}
          />
        </div>
      )}
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
