import { Badge, TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react';
import { Lowercase } from '../../../utilities';
import { UseShoppingCart } from '../../../context/ShoppingCartContext';
import { Button } from 'reactstrap';

const SearchBar: React.FC = () => {
  // Set search param
  const [param, setParam] = useState('');
  const baseUrl = window.location.origin;
  const route = param ? baseUrl + '/search/' + Lowercase(param) : '';

  const { openCart, cartQuantity } = UseShoppingCart();

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarBox}>
        <form className={styles.form} action={route}>
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
          <Badge
            className={styles.searchCart}
            badgeContent={cartQuantity}
            color="secondary"
            onClick={openCart}
            max={9}
          >
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
