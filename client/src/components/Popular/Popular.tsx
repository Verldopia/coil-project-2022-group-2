import React from 'react';
import { ROUTES } from '../../constants/routes';
import Cta from '../Cta/Cta';
import styles from './Popular.module.css';

const Popular = () => {
  return (
    <div className={styles.actionBtn}>
      <Cta inner="What's popular?" route={ROUTES.POPULAR} />
    </div>
  );
};

export default Popular;
