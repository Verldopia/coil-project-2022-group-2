import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

import styles from './Header.module.css';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Button,
} from 'reactstrap';

// Custom components
import { SearchBar, Navigation } from '../../components';
import { Tooltip } from '@mui/material';

const Header: React.FC = () => {
  const [shake, setShake] = useState(false);

  // Repeat the tutorial
  const repeatTutorial = () => {
    // Button begins to shake
    setShake(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 800);

    localStorage.removeItem('tutorial-1');
    localStorage.removeItem('tutorial-2');
    localStorage.removeItem('tutorial-3');
  };

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
            <Button
              id="step-3"
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
              className={shake ? `${styles.shake}` : styles.btn}
              onClick={repeatTutorial}
            >
              <Tooltip
                title="Rewatch the tutorial"
                arrow
                placement="bottom"
              >
                <ReplayOutlinedIcon />
              </Tooltip>
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
