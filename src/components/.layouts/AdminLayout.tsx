import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminBox from '../Admin/AdminBox/AdminBox';
import SidebarNav from '../Admin/SidebarNav/SidebarNav';

export interface IAdminLayoutProps {}

const AdminLayout: React.FC<IAdminLayoutProps> = (props) => {
  return (
    <div className="adminLayout">
      <SidebarNav />
      <AdminBox />
    </div>
  );
};

export default AdminLayout;
