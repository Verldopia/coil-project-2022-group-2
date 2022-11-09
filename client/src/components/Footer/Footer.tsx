// Styles
import styles from './Footer.module.css';
import { TextField } from '@mui/material';
import { ROUTES } from '../../constants';

const Footer = () => {
  const baseUrl = window.location.origin;

  return (
    <footer className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBox}>
          <div className={styles.footerBoxList} id="step-7">
            <ul className={styles.list}>
              <h5 className={styles.title}>Support</h5>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.FAQ}>FAQ</a>
              </li>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.SHIPPING}>Shipping</a>
              </li>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.ABOUT}>About us</a>
              </li>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.CONTACT}>Contact</a>
              </li>
            </ul>
            <ul className={styles.list}>
              <h5 className={styles.title}>Account</h5>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.LOGIN}>Login</a>
              </li>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.REGISTER}>Register</a>
              </li>
              <li className={styles.listItem}>
                <a href={baseUrl + '/' + ROUTES.WISHLIST}>Wishlist</a>
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
              <a href="" className="fa fa-facebook"></a>
            </li>
            <li className={styles.socialsItem}>
              <a href="" className="fa fa-twitter"></a>
            </li>
            <li className={styles.socialsItem}>
              <a href="" className="fa fa-instagram"></a>
            </li>
            <li className={styles.socialsItem}>
              <a href="" className="fa fa-youtube"></a>
            </li>
            <li className={styles.socialsItem}>
              <a href="" className="fa fa-linkedin"></a>
            </li>
          </ul>
        </div>
        <div className="links">
          <ul className={styles.socials}>
            <li className={styles.socialsItem}>
              <a href={baseUrl + '/' + ROUTES.LEGAL}>Legal</a>
            </li>
            <li>|</li>
            <li className={styles.socialsItem}>
              <a href={baseUrl + '/' + ROUTES.LEGAL}>
                Privacy Policy
              </a>
            </li>
            <li>|</li>
            <li className={styles.socialsItem}>
              <a href="">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
