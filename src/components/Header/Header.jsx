import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner_wrapper}>
                <nav>
                    <ul className={styles.navbar_list}>
                        <li className={styles.navbar_list_item}><NavLink exact={true} activeClassName={styles.active} to="/">Главная</NavLink></li>
                        <li className={styles.navbar_list_item}><NavLink activeClassName={styles.active} to="/actors">Актеры</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;