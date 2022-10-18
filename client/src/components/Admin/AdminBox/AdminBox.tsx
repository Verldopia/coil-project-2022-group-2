import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminInfoBox from '../AdminInfoBoxes/AdminInfoBox';
import styles from './AdminBox.module.css';

const AdminBox: React.FC = (props) => {
  return (
    <div className={styles.adminContentBox}>
      <AdminInfoBox />
      <div className={styles.adminContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminBox;
