import React from 'react';

type HeadProps = {
  title: string;
  isActive?: boolean;
};

const Head = ({
  title = 'Hello World..',
  isActive = true,
}: HeadProps) => {
  return <div>{isActive && <h1>{title}</h1>}</div>;
};

export default Head;
