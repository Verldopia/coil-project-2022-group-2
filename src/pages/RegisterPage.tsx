import React from 'react';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export interface IRegisterPageProps {}

const RegisterPage: React.FC<IRegisterPageProps> = (props) => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
