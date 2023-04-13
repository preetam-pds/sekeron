import React from 'react';
import styles from './Home.module.css'


const HomeContainer = ({ children }) => {
    return (
        <div className={styles['home-grid-container']}>
            {children}
        </div>
    )
}

export default HomeContainer