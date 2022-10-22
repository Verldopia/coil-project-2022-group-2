import { useQuery } from '@apollo/client';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  AddToCart,
  Descriptinator,
  RelatedProduct,
  StarRating,
} from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { Lowercase } from '../hooks/TextTransform';
import { ProductsData } from '../interfaces';

export interface IItemPageProps {}

const ItemPage: React.FC<IItemPageProps> = (props) => {
  let { id, title } = useParams();

  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't load product with ID {id}.</p>;

  // Find product by ID
  const product = data?.Items.find((item) => item.id === Number(id));
  // Find 4 related products

  return (
    <div className="container--box">
      {product && (
        <div className="container">
          {/* Breadcrumbing */}
          <Breadcrumbs
            className="bread--box"
            separator="›"
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={
                '/categories/' + Lowercase(product.category?.title)
              }
            >
              {product.category?.title}
            </Link>
            <Typography color="text.primary">
              {product.title}
            </Typography>
          </Breadcrumbs>
          <div className="container--info">
            <div className="container--info__images">
              <p>images</p>
            </div>
            <div className="container--info__params">
              <h1>{product.title}</h1>
              <p>Brand: {product.category?.title}</p>
              <StarRating
                starValue={product.category?.id}
                amount={product.popularity}
              />
              <p>Currently {product.stock} in stock.</p>
              <p>€{product.price}.-</p>
              <AddToCart />
            </div>
            <div className="container--info__text">
              <h3>About the {product.title}</h3>
              {/* <p>{product.description}</p> */}
              <Descriptinator text={product.description} />
            </div>
          </div>
        </div>
      )}

      {/* Select 4 products in same category, and create a card */}
      <RelatedProduct
        id={Number(id)}
        title={title}
        titleText="Related products"
        data={data}
      />
    </div>
  );
};

export default ItemPage;
