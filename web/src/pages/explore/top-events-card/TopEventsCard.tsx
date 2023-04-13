import { Grid } from '@mui/material';
import { strings } from '@sekeron/domain';
import React from 'react';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';
import { imageAvatars } from 'src/core/json/EventJson';
import styles from './TopEventsCard.module.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const TopEventsCard = ({ topEvent, eventIndex }: any) => {
    const { eventPlace, eventType, eventImage, eventDate, isRegistered } = topEvent;
    return (
        <>
            <Grid key={eventIndex} container className={styles['top-events-card']}>
                <img className={styles['more-like-this-image']} alt='more-like-this' src={eventImage} />
                {eventType !== "" &&
                    <div className={styles['screen-tag']} >
                        <div className={styles["event-type"]}>
                            <span >{eventType}</span>
                        </div>
                    </div>
                }
                <div className={styles['card-details']} >
                    <span className={styles['location']} >{eventPlace}</span>
                    <span className={styles['time-and-date']} >{eventDate}</span>
                </div>
                {!isRegistered && <div className={styles['regestered-event']}>
                    <ArrowCircleRightIcon sx={{ fontSize: '32px', margin: '0px 5px', color: 'var(--primary-success-color)' }} /> {strings.registerNow}
                </div>}
                <div className={styles['profile-avatar']} >
                    <CustomAvatar numberOfAvatars={3} variant={'circular'} imageAvatars={imageAvatars} className={styles['other-avatars']}
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', color: 'var(--white-color)' }} />
                </div>
            </Grid>
        </>
    )
}

export default TopEventsCard