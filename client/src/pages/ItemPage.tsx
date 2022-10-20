import { useQuery } from '@apollo/client';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components';
import { ROUTES } from '../constants/routes';
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
  let product = data?.Items.find((item) => item.id === Number(id));
  // Find 4 related products
  let relatedProduct = data?.Items.filter(
    (item) => Lowercase(item.category?.title) === title
  );

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

          <p>this is the product {product.title}.</p>
          <p>it costs €{product.price}.</p>
          <p>{product.description}</p>
          <p>ID: {product.id}</p>
          <div className="container--related"></div>
        </div>
      )}

      {/* Select 4 products in same category, and create a card */}
      <div className="container--preview">
        <h4>Related products</h4>
        <div className="product-container">
          {relatedProduct?.slice(0, 4).map((item, i) => (
            <ProductCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
