import React from 'react';
import { Outlet } from 'react-router-dom';

export interface IFormLayoutProps {}

const FormLayout: React.FC<IFormLayoutProps> = (props) => {
  return (
    <div className="formLayout">
      <Outlet />
    </div>
  );
};

export default FormLayout;
