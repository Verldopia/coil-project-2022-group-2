import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

export interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
  const [enabled, setEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);

  const onExit = () => {
    setEnabled(false);
  };
  const steps = [
    {
      // Landing header
      element: '#step-1',
      intro:
        'Welcome to SmartHomes.com! This short tutorial will show you how the website can help you find what you need to protect your home.',
    },
    {
      // Popular button
      element: '#step-2',
      intro: 'See what everyone is buying!',
    },
    {
      // Wishlist
      element: '#step-3',
      intro:
        'Use the wishlist to favourite items you want to buy in the future. The wishlist will save all the items for easy access later on.',
    },
    {
      // Search bar
      element: '#step-4',
      intro:
        'Use the search bar to find a product you need. You can even type in a keyword if you don’t know exactly what you’re looking for.',
    },
    {
      // Most popular
      element: '#step-5',
      intro: 'The most popular products from SmartHomes.com.',
    },
    {
      // Newest
      element: '#step-6',
      intro: 'The newest products from SmartHomes.com.',
    },
    {
      // Footer
      element: '#step-7',
      intro:
        'Find out more information about the company, shipping details, and FAQs through these links',
    },
  ];

  // Check if tutorial has already been shown
  const tutorial = localStorage.getItem('tutorial');
  if (!tutorial) {
    localStorage.setItem('tutorial', '1');
  }

  return (
    <>
      <Header />
      <main className="baseLayout">
        <div className="App">
          {!tutorial && (
            <Steps
              enabled={enabled}
              steps={steps}
              initialStep={initialStep}
              onExit={onExit}
            />
          )}
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
