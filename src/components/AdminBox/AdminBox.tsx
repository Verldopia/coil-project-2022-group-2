import React from 'react';
import AdminInfoBox from '../AdminInfoBoxes/AdminInfoBox';
import styles from './AdminBox.module.css';

const AdminBox: React.FC = (props) => {
  return (
    <div className={styles.adminContentBox}>
      <AdminInfoBox />
      <div className={styles.adminContent}>
        <p>hello world...</p>
      </div>
    </div>
  );
};

export default AdminBox;
