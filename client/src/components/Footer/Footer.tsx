// Styles
import styles from './Footer.module.css';
import { TextField } from '@mui/material';
import { ROUTES } from '../../constants';
import { NavbarBrand, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBox}>
          <div className={styles.footerBoxList}>
            <ul className={styles.list}>
              <h5 className={styles.title}>Support</h5>
              <li className={styles.listItem}>
                <NavbarBrand tag={NavLink} to={ROUTES.FAQ}>
                  FAQ
                </NavbarBrand>
              </li>
              <li className={styles.listItem}>
                <NavbarBrand tag={NavLink} to={ROUTES.SHIPPING}>
                  Shipping
                </NavbarBrand>
              </li>
              <li className={styles.listItem}>
                <NavbarBrand tag={NavLink} to={ROUTES.ABOUT}>
                  About us
                </NavbarBrand>
              </li>
            </ul>
            <ul className={styles.list}>
              <h5 className={styles.title}>Account</h5>
              <li className={styles.listItem}>
                <NavbarBrand tag={NavLink} to={ROUTES.LOGIN}>
                  Login
                </NavbarBrand>
              </li>
              <li className={styles.listItem}>
                <NavbarBrand tag={NavLink} to={ROUTES.REGISTER}>
                  Register
                </NavbarBrand>
              </li>
              <li className={styles.listItem}>
                <NavbarBrand tag={NavLink} to={ROUTES.WISHLIST}>
                  Wishlist
                </NavbarBrand>
              </li>
            </ul>
          </div>
          <form className={styles.form}>
            <h5 className={styles.title}>
              Subscribe to our newsletter
            </h5>
            <TextField
              className={styles.searchBar}
              size="small"
              variant="outlined"
              label="Your email"
              type="input"
            />
            <button className={styles.searchBtn}>Subscribe</button>
          </form>
        </div>
        <div className="socials">
          <ul className={styles.socials}>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <li className={styles.socialsItem}>
              <NavbarBrand
                tag={NavLink}
                to=""
                className="fa fa-facebook"
              ></NavbarBrand>
            </li>
            <li className={styles.socialsItem}>
              <NavbarBrand
                tag={NavLink}
                to=""
                className="fa fa-twitter"
              ></NavbarBrand>
            </li>
            <li className={styles.socialsItem}>
              <NavbarBrand
                tag={NavLink}
                to=""
                className="fa fa-instagram"
              ></NavbarBrand>
            </li>
            <li className={styles.socialsItem}>
              <NavbarBrand
                tag={NavLink}
                to=""
                className="fa fa-youtube"
              ></NavbarBrand>
            </li>
            <li className={styles.socialsItem}>
              <NavbarBrand
                tag={NavLink}
                to=""
                className="fa fa-linkedin"
              ></NavbarBrand>
            </li>
          </ul>
        </div>
        <div className="links">
          <ul className={styles.socials}>
            <li className={styles.socialsItem}>
              <NavbarBrand tag={NavLink} to={ROUTES.LEGAL}>
                Legal
              </NavbarBrand>
            </li>
            <li>|</li>
            <li className={styles.socialsItem}>
              <NavbarBrand tag={NavLink} to={ROUTES.LEGAL}>
                Privacy Policy
              </NavbarBrand>
            </li>
            <li>|</li>
            <li className={styles.socialsItem}>
              <NavbarBrand tag={NavLink} to="">
                Sitemap
              </NavbarBrand>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
