import React from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <section className={styles.main}>
            <div className={styles.main_inner_wrapper}>
                <div className={styles.main_content}>
                    Главная страница
                </div>
            </div>
        </section>
    )
};

export default MainPage;