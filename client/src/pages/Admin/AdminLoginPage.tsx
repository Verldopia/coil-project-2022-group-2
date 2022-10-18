import React from 'react';
import { AdminLoginForm } from '../../components/Admin/AdminLoginForm/AdminLoginForm';

export interface IAdminLoginPageProps {}

const AdminLoginPage: React.FC<IAdminLoginPageProps> = (props) => {
  return (
    <div>
      <AdminLoginForm />
    </div>
  );
};

export default AdminLoginPage;
