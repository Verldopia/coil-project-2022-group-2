import React from 'react';
import { RegisterForm } from '../components';

export interface IRegisterPageProps {}

const RegisterPage: React.FC<IRegisterPageProps> = (props) => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
