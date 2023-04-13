import { Grid } from '@mui/material';
import React from 'react';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';
import { imageAvatars } from 'src/core/json/EventJson';
import styles from './MoreLikeThisCard.module.css';

const MoreLikeThisCard = () => {
    return (
        <>
            <Grid container item xs={5.5} sm={3.6} md={3.75} lg={2.1} xl={2.2} className={styles['more-like-this-card']}>
                <img className={styles['more-like-this-image']} alt='more-like-this'
                    src={'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'}
                />
                <span className={styles['screen-tag']} >Paid</span>
                <div className={styles['card-details']} >
                    <span className={styles['location']} >CityScapes 2.0</span>
                    <span className={styles['time-and-date']} >09 Jun</span>
                </div>
                <div className={styles['profile-avatar']} >
                    <CustomAvatar numberOfAvatars={3} variant={'circular'} imageAvatars={imageAvatars} className={styles['other-avatars']}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', color: 'var(--white-color)' }} />
                </div>
            </Grid>
        </>
    )
}

export default MoreLikeThisCard