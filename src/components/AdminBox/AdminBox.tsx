import React from 'react';
import styles from './AdminBox.module.css';

const AdminBox: React.FC = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBoxes}>
        <div className={styles.infoBox}>41 orders</div>
        <div className={styles.infoBox}>17 customers</div>
        <div className={styles.infoBox}>975 users</div>
        <div className={styles.infoBox}>65 Items sold</div>
      </div>
    </div>
  );
};

export default AdminBox;
