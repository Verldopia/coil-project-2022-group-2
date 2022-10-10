import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import { NavbarBrand, Button } from 'reactstrap';
import styles from '../../Header/Header.module.css';

const AdminHeader: React.FC = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTop}>
          <div className={styles.headerLogo}>
            <NavbarBrand tag={NavLink} to={ROUTES.ADMIN}>
              <AdjustOutlinedIcon
                className={styles.headerLogoIMG}
              ></AdjustOutlinedIcon>
            </NavbarBrand>
          </div>
          <div className={styles.headerBtns}>
            <Button
              className={styles.btn}
              tag={NavLink}
              to={ROUTES.ADMINLogin}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
