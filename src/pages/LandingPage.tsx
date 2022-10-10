import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

// Components
import Drawer from '@mui/material/Drawer';
import { LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Item from '../components/Item/item';
import Cart from '../components/Header/Cart/Cart';

//Styles
import { Wrapper, StyledButton } from '../App.styles';

// Types
export type CartItemType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const itemAlreadyInCart = prev.find(
        (item) => item.id === clickedItem.id
      );
      if (itemAlreadyInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <p>'Someting went wrong'</p>;

  return (
    <div className="container">
      <Wrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddCart}
            removeFromCart={handleRemoveCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color="error"
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={2}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Item item={item} handleAddCart={handleAddCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
};

export default LandingPage;
