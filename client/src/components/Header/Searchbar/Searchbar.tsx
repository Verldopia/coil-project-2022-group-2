import { TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Lowercase } from '../../../utilities/TextTransform';
import { UseShoppingCart } from '../../../context/ShoppingCartContext';

const SearchBar: React.FC = () => {
  // Set search param
  const [param, setParam] = useState('');
  const route = param ? '../../search/' + Lowercase(param) : '';

  const { openCart, cartQuantity } = UseShoppingCart();

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarBox}>
        {/* // If there's no param, redirect to homepage */}
        <form action={route}>
          <TextField
            className={styles.searchBar}
            size="small"
            variant="outlined"
            label="Search products"
            type="search"
            onChange={(event) => setParam(event.target.value)}
          />
          <Button className={styles.searchBtn} to={route}>
            <SearchOutlinedIcon />
          </Button>
        </form>
        {cartQuantity !== 0 && (
          <button className={styles.searchCart} onClick={openCart}>
            <ShoppingCartOutlinedIcon />
            <div className={styles.searchCartIndicator}>
              {cartQuantity}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
