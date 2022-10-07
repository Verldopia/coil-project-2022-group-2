import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Navigation.module.css';
import React from 'react';

const categoriesRoutes = [
    {
        title: 'New arrivals',
        path: '/new'
    },
    {
        title: 'Cameras',
        path: '/cameras'
    },
    {
        title: 'Sensors',
        path: '/sensors'
    },
    {
        title: 'Touchpads',
        path: '/touchpads'
    },
    {
        title: 'Thermostats',
        path: '/thermostats'
    },
    {
        title: 'Sale',
        path: '/sale'
    }
];
const Navigation: React.FC = () => {
    return (
        <>
            <Nav className={styles.nav}>
                <div className={styles.navContainer}>
                    {categoriesRoutes &&
                        categoriesRoutes.map((route) => (
                            <NavItem key={route.path}>
                                <NavLink className={route.title == 'Sale' ? styles.sale : styles.link} tag={RRNavLink} to={route.path}>
                                    {route.title}
                                </NavLink>
                            </NavItem>
                        ))}
                </div>
            </Nav>
        </>
    );
};

export default Navigation;
