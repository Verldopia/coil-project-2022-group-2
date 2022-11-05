import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

export interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main className="baseLayout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
