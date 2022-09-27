import { useState } from 'react';
import { useQuery } from 'react-query';

// Components
import Drawer from '@mui/material/Drawer';
import { LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Item from './item/item';

//Styles
import { Wrapper, StyledButton } from './App.styles';

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

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddCart = (clickedItem: CartItemType) => null;
  const handleRemoveCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <p>'Sometin wong'</p>;

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddCart={handleAddCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
