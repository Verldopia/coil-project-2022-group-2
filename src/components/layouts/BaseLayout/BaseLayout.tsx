import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import styles from './BaseLayout.module.css';

export interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
