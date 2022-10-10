import React from 'react';
import Header from '../components/Header/Header';
import { LoginForm } from '../components/LoginForm/LoginForm';

export interface IAdminLoginPageProps {}

const AdminLoginPage: React.FC<IAdminLoginPageProps> = (props) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default AdminLoginPage;
