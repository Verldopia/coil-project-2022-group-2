import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductCard,
  DescriptionBox,
  FilterProducts,
} from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { ProductsData } from '../interfaces';

// Styles
import styles from '../components/Product/FilterProducts/FilterProducts.module.css';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Capitalize, Lowercase } from '../hooks/TextTransform';

const Categories: React.FC = () => {
  const [filter, setFilter] = React.useState<string | null>('left');
  let { title } = useParams();

  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load products.</p>;

  const product = data?.Items.filter(
    (item) => Lowercase(item.category?.title) == title
  );

  // Filter products
  const handleFilter = (
    e: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => {
    setFilter(newFilter);
  };

  // Filter price
  filter === 'price-high' &&
    product?.sort((c1, c2) => c2.price - c1.price);
  filter === 'price-low' &&
    product?.sort((c1, c2) => c1.price - c2.price);

  // Filter popularity
  filter === 'popularity-high' &&
    product?.sort((c1, c2) => c2.popularity - c1.popularity);
  filter === 'popularity-low' &&
    product?.sort((c1, c2) => c1.popularity - c2.popularity);

  return (
    <div className="box">
      <div className="container--box">
        <Breadcrumbs
          className="bread--box"
          separator="›"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">
            {Capitalize(title)}
          </Typography>
        </Breadcrumbs>
        {/* Total amount of products */}
        {product && (
          <p className="bread--box">
            {product.length} products found.
          </p>
        )}
      </div>
      <div className="container container--filter">
        <div className={styles.productContainer}>
          <ul className={styles.productList}>
            <li>
              <FilterProducts
                title="Price"
                low="price-low"
                iconLow="low"
                high="price-high"
                iconHigh="high"
                handleFilter={handleFilter}
                filter={filter}
              />
            </li>
            <li>
              <FilterProducts
                title="Popularity"
                low="popularity-low"
                iconLow="low"
                high="popularity-high"
                iconHigh="high"
                handleFilter={handleFilter}
                filter={filter}
              />
            </li>
          </ul>
        </div>
        <div className="product-container">
          <DescriptionBox
            text={
              product
                ? product[0].category?.description
                : 'There is no description for this category'
            }
            title={product ? product[0].category?.title : ''}
          />
          {product?.map((item, i) => (
            <ProductCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
