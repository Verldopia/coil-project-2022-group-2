import React from 'react';
import styles from './AdminInfoBox.module.css';

const AdminInfoBox: React.FC = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoBoxes}>
        <div className={styles.infoBox}>
          <div id={styles.iconBox} className={styles.infoBoxIcon}>
            <div id={styles.iconBox} className={styles.icon}></div>
          </div>
          <div className={styles.infoBoxText}>
            <span className={styles.infoBoxSpan}>41</span>
            <p>orders</p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div id={styles.iconGlobe} className={styles.infoBoxIcon}>
            <div id={styles.iconGlobe} className={styles.icon}></div>
          </div>
          <div className={styles.infoBoxText}>
            <span className={styles.infoBoxSpan}>17</span>
            <p>customers</p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div
            id={styles.iconCurrency}
            className={styles.infoBoxIcon}
          >
            <div
              id={styles.iconCurrency}
              className={styles.icon}
            ></div>
          </div>
          <div className={styles.infoBoxText}>
            <span className={styles.infoBoxSpan}>975</span>
            <p>users</p>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div id={styles.iconSold} className={styles.infoBoxIcon}>
            <div id={styles.iconSold} className={styles.icon}></div>
          </div>
          <div className={styles.infoBoxText}>
            <span className={styles.infoBoxSpan}>65</span>
            <p>items sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfoBox;
