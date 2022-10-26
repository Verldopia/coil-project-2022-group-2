import React from 'react';
import { ROUTES } from '../../constants/routes';
import styles from './Popular.module.css';

type Props = {};

const Popular = (props: Props) => {
  return (
    <a href={'../../' + ROUTES.SALE} className={styles.actionBtn}>
      What's popular?
    </a>
  );
};

export default Popular;
