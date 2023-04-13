import React from 'react';
import styles from './Upload.module.css'

const Upload = ({ children }) => {
    return (
        <div className={styles['upload-container-overlay']}>

            {children}

        </div>
    )
}

export default Upload