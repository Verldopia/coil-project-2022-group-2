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
          Connection is evolving and so are we
        </h1>
        <Popular />
      </div>
    </div>
  );
}

export default LandingHead;
