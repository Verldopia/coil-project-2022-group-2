import { TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Lowercase } from '../../../hooks/TextTransform';

const SearchBar: React.FC = () => {
  // Set search param
  const [param, setParam] = useState('');
  const route = param ? '../search/' + Lowercase(param) : '/';

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarBox}>
        {/* If there's no param, redirect to homepage */}
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
            Search
          </Button>
        </form>
        <button className={styles.searchCart}>
          <ShoppingCartOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
