import React from 'react';
import styles from './FilterProducts.module.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface FilterProductsProps {
  title: string;
  low: string;
  iconLow: string;
  high: string;
  iconHigh: string;
  handleFilter: (
    e: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => void;
  filter: string | null;
}

function FilterProducts({
  title,
  low,
  iconLow,
  high,
  iconHigh,
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
        <ToggleButton
          className={styles.productFilterButton}
          value={low}
          aria-label={low}
          // disabled={true}
        >
          {iconLow}
        </ToggleButton>
        <ToggleButton
          className={styles.productFilterButton}
          value={high}
          aria-label={high}
          // disabled={false}
        >
          {iconHigh}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default FilterProducts;
