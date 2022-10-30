import React from 'react';
import { useQuery } from '@apollo/client';
import { ProductsData } from '../interfaces';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { DescriptionBox, Popular, ProductCard } from '../components';

// Styles
import { Button, Tooltip } from '@mui/material';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const WishlistPage = () => {
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't load wishlist.</p>;

  let newList = new Array();
  if (localStorage.wishlist) {
    // Get data from localStorage
    let wishlist = JSON.parse(localStorage.wishlist);

    // Search where wishlistID === productID
    wishlist.forEach((id: number) => {
      const product = data?.Items.find((prod) => id === prod.id);
      newList.push(product);
    });
  }

  // Remove all wishlistItems when clicked
  function removeAll() {
    localStorage.removeItem('wishlist');
    window.location.reload();
  }

  return (
    <div className="box">
      {newList[0] && (
        <div className="container--box">
          {/* // Total amount of products */}
          {newList.length && (
            <p className="bread--box">
              {newList.length} products found.
            </p>
          )}
          <Tooltip
            title="Remove all items from wishlist"
            arrow
            placement="bottom"
          >
            <Button
              className="mainBtn removeBtn"
              color="secondary"
              variant="outlined"
              onClick={removeAll}
            >
              <HeartBrokenIcon />
              Remove all
            </Button>
          </Tooltip>
        </div>
      )}
      {newList[0] ? (
        <ul className="product-container">
          <DescriptionBox
            title={'Your wishlist'}
            text={'All your favorite products, in one spot!'}
          />

          {newList.map((item, i) => (
            <ProductCard button={true} item={item} i={i} key={i} />
          ))}
        </ul>
      ) : (
        // Displayed when there is no wishlist
        <div className="form-container">
          <p>
            Your <strong className="bold">wishlist</strong> is empty.
          </p>
          <p>
            You can add products to this list, to easily find them
            later.
          </p>
          <Popular />
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
