import React from 'react';

type ButtonProps = {
  onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button type="button" onClick={(e) => onClick}>
      {children}
    </button>
  );
};

export default Button;
