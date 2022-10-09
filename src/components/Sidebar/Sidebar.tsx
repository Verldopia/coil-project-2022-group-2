import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
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
              <a href="#">Live chat</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Administration</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Content</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Content approval</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Stock</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Shipping</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Payments</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Discounts</a>
            </li>
            <li className={styles.listItemLast}>
              <a href="#">Customers</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
