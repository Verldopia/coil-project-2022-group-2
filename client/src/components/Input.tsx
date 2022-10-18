import React, { useRef, useState } from 'react';

type Props = {};

const Input = (props: Props) => {
  const [name, setName] = useState<string>('Default...');
  const ref = useRef<HTMLInputElement>(null);

  if (ref && ref.current) {
    console.log(ref.current.value);
  }
  return (
    <input
      ref={ref}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Input;
