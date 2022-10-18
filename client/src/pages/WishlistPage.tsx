import React from 'react';
import Button from '../components/Button';
import Head from '../components/Head';
import Input from '../components/Input';
import ProductHead from '../components/ProductHead';

export interface IWishlistPageProps {}

const WishlistPage: React.FC<IWishlistPageProps> = (props) => {
  return (
    <div>
      <Head title="titeltjen" isActive={true} />
      <ProductHead
        product={{ name: 'Dit is een product', price: 3 }}
      />
      <Button onClick={() => console.log('testing')}>Click Me</Button>
      <Input />
      <p>This is the Wishlist!!</p>
    </div>
  );
};

export default WishlistPage;
