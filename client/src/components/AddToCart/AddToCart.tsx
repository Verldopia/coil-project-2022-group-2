import React from 'react';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { Product } from '../../interfaces';
import { Button, Tooltip } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
type AddToCartProps = { item: Product };

const AddToCart = ({ item }: AddToCartProps) => {
  const { increaseCartQuantity } = UseShoppingCart();

  return (
    <>
      <Tooltip title="Add to cart" arrow placement="bottom">
        <Button
          sx={{
            color: 'var(--darkest-grey)',
            border: '1px solid var(--dark-grey)',
            backgroundColor: 'var(--cta-color)',
            '&:hover': { backgroundColor: 'var(--dark-color)' },
          }}
          className="mainBtn"
          variant="contained"
          onClick={() => increaseCartQuantity(item?.id)}
        >
          <ShoppingCartOutlinedIcon />
        </Button>
      </Tooltip>
    </>
  );
};

export default AddToCart;
