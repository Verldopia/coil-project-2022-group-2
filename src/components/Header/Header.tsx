import { NavLink } from 'react-router-dom';
import React from 'react';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import styles from './Header.module.css';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Button } from 'reactstrap';
import { ROUTES } from '../../constants/routes';
// import { SearchBar } from '../../filter';

// Custom components
// import Navigation from '../Navigation';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <NavbarBrand tag={NavLink} to={ROUTES.LANDING}>
                <AdjustOutlinedIcon></AdjustOutlinedIcon>
            </NavbarBrand>
            <Button tag={NavLink} to={ROUTES.ADMIN}>
                Admin dashboard
            </Button>
            <Button tag={NavLink} to={ROUTES.WISHLIST}>
                Wishlist
            </Button>
            <Button tag={NavLink} to={ROUTES.LOGIN}>
                Login
            </Button>
            <Button tag={NavLink} to={ROUTES.REGISTER}>
                Register
            </Button>
            <Button tag={NavLink} to="/toggler">
                EN
            </Button>
            <div /* <SearchBar /> */></div>
            <Navbar expand="md" light>
                <NavbarToggler onClick={function noRefCheck() {}} />
                <Collapse navbar>{/* <Navigation /> */}</Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
