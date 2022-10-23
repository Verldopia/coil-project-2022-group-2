import React from 'react';
import styles from './FilterProducts.module.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export interface FilterProductsProps {
  title: string;
  low: string;
  icon: React.ReactNode;
  high: string;
  handleFilter: (
    e: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => void;
  filter: string | null;
}

function FilterProducts({
  title,
  low,
  icon,
  high,
  handleFilter,
  filter,
}: FilterProductsProps) {
  return (
    <>
      <p className={styles.productFilterTitle}>{title}</p>
      <ToggleButtonGroup
        className={styles.productListItem}
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label="text filter"
      >
        <ToggleButton color="warning" value={low} aria-label={low}>
          {icon}
        </ToggleButton>
        <ToggleButton color="info" value={high} aria-label={high}>
          {icon}
          {icon}
          {icon}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default FilterProducts;
