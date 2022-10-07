import { NavLink } from 'react-router-dom';
import React from 'react';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import styles from './Header.module.css';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Button } from 'reactstrap';
// import { SearchBar } from '../../filter';

// Custom components
// import Navigation from '../Navigation';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <AdjustOutlinedIcon></AdjustOutlinedIcon>
            <NavbarBrand tag={NavLink} to="/">
                Home
            </NavbarBrand>
            <Button tag={NavLink} to="/x">
                Admin dashboard
            </Button>
            <Button tag={NavLink} to="/wishlist">
                Wishlist
            </Button>
            <Button tag={NavLink} to="/login">
                Login
            </Button>
            <Button tag={NavLink} to="/register">
                Register
            </Button>
            <Button tag={NavLink} to="/language">
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
