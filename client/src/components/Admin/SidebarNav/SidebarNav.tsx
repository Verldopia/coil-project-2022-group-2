import styles from './SidebarNav.module.css';
import { ROUTES } from '../../../constants/routes';

const SidebarNav: React.FC = () => {
  return (
    <div className={styles.containerSidebar}>
      <nav id="sidebar">
        <div className={styles.list}>
          <ul className="list-unstyled components mb-5">
            <li className={styles.listItem}>
              <a href={ROUTES.ADMIN} className="bold">
                Admin dashboard
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINLive}
              >
                Live chat
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINAdministration}
              >
                Orders
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINContent}
              >
                Content
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINContentApproval}
              >
                Content approval
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINStock}
              >
                Stock
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINShipping}
              >
                Shipping
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINPayments}
              >
                Payments
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINDiscount}
              >
                Discounts
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.listItemLink}
                href={ROUTES.ADMINCustomers}
              >
                Customers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarNav;
