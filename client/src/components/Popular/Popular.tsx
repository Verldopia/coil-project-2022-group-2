import React from 'react';
import styles from './Popular.module.css';

type Props = {};

const Popular = (props: Props) => {
  return (
    <a href="./sale" className={styles.popular}>
      What's popular?
    </a>
  );
};

export default Popular;
