import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Navigation.module.css';
import React from 'react';
import {
  Capitalize,
  Lowercase,
  useFetchCategories,
} from '../../../utilities';
import { ROUTES } from '../../../constants';

const Navigation: React.FC = () => {
  // Fetch categories for navigation
  const data = useFetchCategories();

  return (
    <>
      <Nav className={styles.nav}>
        <div className={styles.navContainer}>
          <NavItem key="1">
            <NavLink
              className={styles.popular}
              tag={RRNavLink}
              to={`${ROUTES.POPULAR}`}
            >
              Popular
            </NavLink>
          </NavItem>
          {data?.categories.map((item, i) => (
            <NavItem key={i}>
              <NavLink
                className={styles.link}
                tag={RRNavLink}
                to={`categories/` + Lowercase(item.title)}
              >
                {Capitalize(item.title)}
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
    </>
  );
};

export default Navigation;
