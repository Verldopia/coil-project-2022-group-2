import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import React from 'react';
import styles from './Header.module.css';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Button,
} from 'reactstrap';

// Custom components
import { SearchBar, Navigation } from '../../components';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTop}>
          <div className={styles.headerLogo}>
            <NavbarBrand tag={NavLink} to={ROUTES.LANDING}>
              <div className={styles.headerLogoIMG}></div>
            </NavbarBrand>
          </div>
          <div className={styles.headerBtns}>
            {/* // !! To Be removed for production! (also css) */}
            <Button
              className={styles.admin}
              tag={NavLink}
              to={ROUTES.ADMINLogin}
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
        <SearchBar />
      </div>
      <Navbar expand="md" light>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>{<Navigation />}</Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
