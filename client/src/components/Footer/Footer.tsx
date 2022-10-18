import React from 'react';
import styles from './Footer.module.css';

export interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <footer className={styles.footerContainer}>
            <p>This is the footer.</p>
        </footer>
    );
};

export default Footer;
