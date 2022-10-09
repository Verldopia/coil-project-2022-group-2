import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AdminLayout.module.css';

export interface IAdminLayoutProps {}

const AdminLayout: React.FC<IAdminLayoutProps> = (props) => {
  return (
    <div className={styles.adminLayout}>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
