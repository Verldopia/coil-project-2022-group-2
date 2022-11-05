import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AddToCart,
  Descriptinator,
  ImageModal,
  RelatedProduct,
  StarRating,
} from '../components';
import { ItemSteps } from '../constants';

// Styles
import {
  Breadcrumbs,
  Button,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';
import { Lowercase, SlugifyID, useFetchProducts } from '../utilities';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const ItemPage: React.FC = (props) => {
  const [enabled, setEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);
  let { id, title } = useParams();

  const onExit = () => {
    localStorage.setItem('tutorial-2', '1');
    setEnabled(false);
  };

  // Fetch products
  const data = useFetchProducts();

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

  // Check if tutorial has already been shown
  const tutorial_2 = localStorage.getItem('tutorial-2');

  return (
    <div className="container--box">
      {product && (
        <div className="container">
          {/* // Tutorial */}
          {!tutorial_2 && (
            <div className="App">
              <Steps
                enabled={enabled}
                steps={ItemSteps}
                initialStep={initialStep}
                onExit={onExit}
              />
            </div>
          )}

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
              <StarRating
                starValue={product.category?.id}
                amount={product.popularity}
              />
              <p>Currently {product.stock} in stock.</p>
              <p>${product.price}.-</p>

              <div className="button" id="step-8">
                <AddToCart item={product} />
              </div>

              <Button
                id="step-9"
                className="mainBtn"
                color="info"
                variant="outlined"
                onClick={handleWishlist}
                disabled={disabled}
              >
                {disabled ? (
                  <FavoriteOutlinedIcon />
                ) : (
                  <Tooltip
                    title="Add to wishlist"
                    arrow
                    placement="bottom"
                  >
                    <FavoriteBorderOutlinedIcon />
                  </Tooltip>
                )}
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
      <div id="step-10">
        <RelatedProduct
          id={SlugifyID(id)}
          title={title}
          titleText="Related products"
          data={data}
        />
      </div>
    </div>
  );
};

export default ItemPage;
