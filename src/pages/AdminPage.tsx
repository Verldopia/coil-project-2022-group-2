import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminBox from '../components/AdminBox/AdminBox';

export interface IAdminPageProps {}

const AdminPage: React.FC<IAdminPageProps> = (props) => {
  return (
    <>
      <Sidebar />
      <AdminBox />
    </>
  );
};

export default AdminPage;
