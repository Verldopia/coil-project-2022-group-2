import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className="baseLayout">
        <Outlet />
        {/* Yeet */}
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
