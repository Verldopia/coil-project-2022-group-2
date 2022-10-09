import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export interface ILayoutComponentProps {}

const LayoutComponent: React.FC<ILayoutComponentProps> = (props) => {
    return (
        <div className={styles.layout}>
            <Outlet />
        </div>
    );
};

export default LayoutComponent;
