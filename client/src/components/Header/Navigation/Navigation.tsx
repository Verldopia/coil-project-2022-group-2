import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Navigation.module.css';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../../../graphql/categories';
import { CategoryData } from '../../../interfaces';
import { Capitalize, Lowercase } from '../../../hooks/TextTransform';

const Navigation: React.FC = () => {
  // Fetch categories for navigation
  const { loading, error, data } = useQuery<CategoryData>(
    GET_ALL_CATEGORIES,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There are no categories</p>;

  return (
    <>
      <Nav className={styles.nav}>
        <div className={styles.navContainer}>
          {data?.categories.map((item, i) => (
            <NavItem key={i}>
              <NavLink
                className={
                  item.title == 'Sale' ? styles.sale : styles.link
                }
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
