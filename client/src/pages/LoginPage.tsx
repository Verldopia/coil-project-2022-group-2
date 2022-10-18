import React from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';

export interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
