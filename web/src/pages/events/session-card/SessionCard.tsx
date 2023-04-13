import { Grid } from '@mui/material';
import React from 'react';
import styles from './SessionCard.module.css'

const SessionCard = () => {
    return (
        <>
            <Grid item container gap={3} xs={12} sm={5.5} md={3.45} lg={3.45} xl={3.65} className={styles['session-card']} >
                <img className={styles['session-image']} src={'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'} alt={'title-image'} />
                <span className={styles['session-header']} >Title</span>
            </Grid>
            <Grid item container gap={3} xs={12} sm={5.5} md={3.45} lg={3.45} xl={3.65} className={styles['session-card']} >
                <img className={styles['session-image']} src={'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'} alt={'title-image'} />
                <span className={styles['session-header']} >Site Map</span>
            </Grid>
            <Grid item container gap={3} xs={12} sm={5.5} md={3.45} lg={3.45} xl={3.65} className={styles['session-card']} >
                <img className={styles['session-image']} src={'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'} alt={'title-image'} />
                <span className={styles['session-header']} >Title</span>
            </Grid>
        </>
    )
}

export default SessionCard