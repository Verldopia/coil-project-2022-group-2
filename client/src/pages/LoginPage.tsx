import React from 'react';
import { LoginForm } from '../components';

export interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
