import React from 'react';
import { Popular } from '../../../components';
import styles from '../ProductCard/ProductCard.module.css';

type Props = {
  text: string | undefined;
  title: string | undefined;
};

function DescriptionBox({ text, title }: Props) {
  return (
    <article className={styles.descriptionContainer}>
      <h1>{title}</h1>
      <p className={styles.descriptionText}>
        {(text + ' ').repeat(5)}
      </p>
      <Popular />
    </article>
  );
}

export default DescriptionBox;
