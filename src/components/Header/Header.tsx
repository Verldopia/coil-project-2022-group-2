import { NavLink } from 'react-router-dom';
import React from 'react';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import styles from './Header.module.css';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Button,
} from 'reactstrap';
import { ROUTES } from '../../constants/routes';

// Custom components
import Navigation from '../Navigation/Navigation';
import { Searchbar } from '../Searchbar/Searchbar';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTop}>
          <div className={styles.headerLogo}>
            <NavbarBrand tag={NavLink} to={ROUTES.LANDING}>
              <AdjustOutlinedIcon
                className={styles.headerLogoIMG}
              ></AdjustOutlinedIcon>
            </NavbarBrand>
          </div>
          <div className={styles.headerBtns}>
            {/* To Be removed for production! (also css) */}
            <Button
              className={styles.admin}
              tag={NavLink}
              to={ROUTES.ADMINLOGIN}
            >
              Admin dashboard
            </Button>
            <Button
              className={styles.btn}
              tag={NavLink}
              to={ROUTES.WISHLIST}
            >
              Wishlist
            </Button>
            <Button
              className={styles.btn}
              tag={NavLink}
              to={ROUTES.LOGIN}
            >
              Login
            </Button>
            <Button
              className={styles.btn}
              tag={NavLink}
              to={ROUTES.REGISTER}
            >
              Register
            </Button>
            <Button
              className={styles.btn}
              tag={NavLink}
              to="/toggler"
            >
              EN
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Searchbar />
      </div>
      <Navbar expand="md" light>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>{<Navigation />}</Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
