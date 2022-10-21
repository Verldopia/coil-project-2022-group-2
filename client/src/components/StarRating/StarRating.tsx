import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import styles from './StarRating.module.css';

type StarRatingProps = {
  starValue: number | null;
  amount: number | null;
};

const StarRating = ({ starValue, amount }: StarRatingProps) => {
  const [value, setValue] = useState(starValue);

  return (
    <div className={styles.starRating}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      />
      {value && <p className={styles.amount}>{amount} ratings</p>}
    </div>
  );
};

export default StarRating;
