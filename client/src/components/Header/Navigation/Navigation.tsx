import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Navigation.module.css';
import React from 'react';

const categoriesRoutes = [
  {
    title: 'New arrivals',
    path: 'categories',
  },
  {
    title: 'Cameras',
    path: 'categories',
  },
  {
    title: 'Sensors',
    path: 'categories',
  },
  {
    title: 'Touchpads',
    path: 'categories',
  },
  {
    title: 'Thermostats',
    path: 'categories',
  },
  {
    title: 'Sale',
    path: 'categories',
  },
];
const Navigation: React.FC = () => {
  return (
    <>
      <Nav className={styles.nav}>
        <div className={styles.navContainer}>
          {categoriesRoutes &&
            categoriesRoutes.map((route, i) => (
              <NavItem key={i}>
                <NavLink
                  className={
                    route.title == 'Sale' ? styles.sale : styles.link
                  }
                  tag={RRNavLink}
                  to={route.path}
                >
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
