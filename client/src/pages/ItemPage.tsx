import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
  AddToCart,
  Descriptinator,
  ImageModal,
  RelatedProduct,
  StarRating,
} from '../components';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { Lowercase, SlugifyID } from '../utilities/TextTransform';
import { ProductsData } from '../interfaces';

const ItemPage: React.FC = (props) => {
  let { id, title } = useParams();

  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't load product with ID {id}.</p>;

  // Find product by ID
  const product = data?.Items.find(
    (item) => item.id === SlugifyID(id)
  );

  // When product ID is found, disable button
  let disabled = false;
  if (localStorage.wishlist) {
    let finder = JSON.parse(localStorage.wishlist);
    const found = finder.find((item: number) => item === product?.id);
    if (found) {
      disabled = true;
    }
  }

  // Set items to localStorage when clicked on wishlist
  function handleWishlist() {
    // Get localStorage and push clicked product ID to array
    let wishlist = JSON.parse(
      localStorage.getItem('wishlist') ?? '[]'
    );
    wishlist.push(product?.id);

    // Remove duplicates and set to localStorage
    localStorage.setItem(
      'wishlist',
      JSON.stringify([...new Set(wishlist)])
    );

    // Disable button, and reload
    disabled = true;
    window.location.reload();
  }

  return (
    <div className="container--box">
      {product && (
        <div className="container">
          {/* // Breadcrumbing */}
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
            <div className="container--info__images images">
              <ImageModal
                src={product.mainImage}
                alt={product.title}
              />
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
              <AddToCart item={product} />
              <Button
                className="wishlist"
                onClick={handleWishlist}
                disabled={disabled}
              >
                Add to wishlist
              </Button>
            </div>
            <div className="container--info__text">
              <h3>About the {product.title}</h3>

              {/* // <p>{product.description}</p> */}
              <Descriptinator text={product.description} />
            </div>
          </div>
        </div>
      )}

      {/* // Select 4 products in same category, and create a card */}
      <RelatedProduct
        id={SlugifyID(id)}
        title={title}
        titleText="Related products"
        data={data}
      />
    </div>
  );
};

export default ItemPage;
