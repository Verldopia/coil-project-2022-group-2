import styles from './SidebarNav.module.css';
import { ROUTES } from '../../../constants/routes';

const SidebarNav: React.FC = () => {
  return (
    <div className={styles.containerSidebar}>
      <nav id="sidebar">
        <div className={styles.list}>
          <ul className="list-unstyled components mb-5">
            <li className={styles.listItemWhite}>
              <a href="x" className={styles.listItemBold}>
                Admin dashboard
              </a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINLive}>Live chat</a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINAdministration}>Orders</a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINContent}>Content</a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINContentApproval}>
                Content approval
              </a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINStock}>Stock</a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINShipping}>Shipping</a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINPayments}>Payments</a>
            </li>
            <li className={styles.listItem}>
              <a href={ROUTES.ADMINDiscount}>Discounts</a>
            </li>
            <li className={styles.listItemLast}>
              <a href={ROUTES.ADMINCustomers}>Customers</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarNav;
