import React from 'react';
import { TextField } from '@mui/material';
import styles from './AdminTable.module.css';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

export const AdminTable: React.FC = () => {
  return (
    <>
      <h1>Orders</h1>
      <div className="form-box-s margin">
        <TextField
          className="form-input"
          size="small"
          variant="outlined"
          label="Search orders"
          type="text"
        />
      </div>
      <table className={styles.table}>
        <tr className={styles.tr}>
          <th className={styles.th}>Order</th>
          <th className={styles.th}>Customer</th>
          <th className={styles.th}>Status</th>
          <th className={styles.th}>Order date</th>
          <th className={styles.th}>Amount</th>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>1</td>
          <td className={styles.td}>Maria Anders</td>
          <td className={styles.td}>
            {
              <AdjustOutlinedIcon
                className={styles.statusDelivered}
              ></AdjustOutlinedIcon>
            }
          </td>
          <td className={styles.td}>Mon 12 Jun 2022</td>
          <td className={styles.td}>24</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>2</td>
          <td className={styles.td}>Maria Anders</td>
          <td className={styles.td}>
            {
              <AdjustOutlinedIcon
                className={styles.statusShipped}
              ></AdjustOutlinedIcon>
            }
          </td>
          <td className={styles.td}>Mon 23 April 2022</td>
          <td className={styles.td}>7</td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.td}>3</td>
          <td className={styles.td}>Maria Anders</td>
          <td className={styles.td}>
            {
              <AdjustOutlinedIcon
                className={styles.statusInitial}
              ></AdjustOutlinedIcon>
            }
          </td>
          <td className={styles.td}>Mon 13 May 2022</td>
          <td className={styles.td}>214</td>
        </tr>
      </table>
    </>
  );
};
