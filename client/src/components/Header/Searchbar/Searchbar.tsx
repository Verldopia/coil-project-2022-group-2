import { TextField } from '@mui/material';
import styles from './Searchbar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { AllLowerCase } from '../../../hooks/TextTransform';

export const Searchbar: React.FC = () => {
  // Set search param
  const [param, setParam] = useState('');
  const route = param ? '../search/' + AllLowerCase(param) : '/';

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
          <Button to={route}>submit</Button>
        </form>
        <button className={styles.searchCart}>
          <ShoppingCartOutlinedIcon />
        </button>
      </div>
    </div>
  );
};
