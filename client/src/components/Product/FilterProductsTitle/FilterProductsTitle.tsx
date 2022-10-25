import React from 'react';
import styles from './FilterProductsTitle.module.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Capitalize } from '../../../utilities/TextTransform';

export interface FilterProductsProps {
  title: string;
  handleFilter: (
    e: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => void;
  filter: string | null;
}

function FilterProducts({
  title,
  handleFilter,
  filter,
}: FilterProductsProps) {
  return (
    <>
      <ToggleButtonGroup
        className={styles.typeItem}
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label="text filter"
      >
        <ToggleButton
          className={styles.typeItem}
          color="info"
          value={title}
          aria-label={title}
        >
          {title}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default FilterProducts;
