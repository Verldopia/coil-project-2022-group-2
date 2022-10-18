import React from 'react';
import AdminBox from '../Admin/AdminBox/AdminBox';
import AdminHeader from '../Admin/AdminHeader/AdminHeader';
import SidebarNav from '../Admin/SidebarNav/SidebarNav';

export interface IAdminLayoutProps {}

const AdminLayout: React.FC<IAdminLayoutProps> = (props) => {
  return (
    <>
      <AdminHeader />
      <div className="adminLayout">
        <SidebarNav />
        <AdminBox />
      </div>
    </>
  );
};

export default AdminLayout;
