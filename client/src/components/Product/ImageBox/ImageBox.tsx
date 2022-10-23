import React from 'react';
import { Product } from '../../../interfaces';
import styles from './ImageBox.module.css';

type ImageBoxProps = {
  product: Product;
};

function ImageBox({ product }: ImageBoxProps) {
  return (
    <div className="container--info__images images">
      <img
        className="images--main"
        src={product.mainImage}
        alt={product.title}
      />
    </div>
  );
}

export default ImageBox;
