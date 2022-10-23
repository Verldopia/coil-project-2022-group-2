import React from 'react';
import { Popular } from '../../components';
import styles from './LandingHead.module.css';
type Props = {};

function LandingHead({}: Props) {
  return (
    <div className="container--info">
      <div className="container--info__images">
        <div className={styles.img}></div>
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.h1}>
          Connection is evolving and so are we!
        </h1>
        <p className={styles.h1}>
          We have everything you need to keep your home safe,
          monitored, and smart.
        </p>
        <div className={styles.btn}>
          <Popular />
        </div>
      </div>
    </div>
  );
}

export default LandingHead;
