import { useQuery } from '@apollo/client';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FilterProducts,
  ProductCard,
  DescriptionBox,
} from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { Capitalize, Lowercase } from '../hooks/TextTransform';
import { ProductsData } from '../interfaces';

export interface ICategoriesProps {}

const Categories: React.FC<ICategoriesProps> = (props) => {
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
        <FilterProducts products={product} />
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
