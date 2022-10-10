import React from 'react';
import { Outlet } from 'react-router-dom';

export interface IAdminLayoutProps {}

const AdminLayout: React.FC<IAdminLayoutProps> = (props) => {
  return (
    <div className="adminLayout">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
