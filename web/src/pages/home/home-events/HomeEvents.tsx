import { Grid } from '@mui/material';
import React from 'react';
import ImageAssets from 'src/assets';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';
import styles from './HomeEvents.module.css'

interface IHomeEventsProps {
    eventsOfArtist: Array<any>
}

const HomeEvents = (homeEventsProps: IHomeEventsProps) => {

    const imageAvatars = [
        {
            id: 1,
            imageUrl: ImageAssets.ic_artist_image
        },
        {
            id: 2,
            imageUrl: ImageAssets.ic_artist_image_2
        },
        {
            id: 3,
            imageUrl: ImageAssets.ic_artist_image_3
        },
        {
            id: 4,
            imageUrl: ImageAssets.ic_artist_image_4
        },
        {
            id: 5,
            imageUrl: ImageAssets.ic_artist_image_5
        },
        {
            id: 6,
            imageUrl: ImageAssets.ic_artist_image_6
        }
    ]

    const { eventsOfArtist } = homeEventsProps
    return (
        <>
            {eventsOfArtist?.map((item, index) => {
                return (
                    <Grid key={index} container rowGap={1.5} className={eventsOfArtist.length - 1 === index ? styles['events-artist-container-last'] : styles['events-artist-container']}>

                        <Grid container justifyContent={'space-between'}>
                            <Grid item className={styles['location-text']} xs={9} sm={9}>{item.eventsLocation}</Grid>
                            <Grid item>
                                <img alt='forword-icon' className={styles['forword-icon']} src={ImageAssets.ic_dropdown} />
                            </Grid>
                        </Grid>

                        <Grid container rowGap={2} justifyContent={'space-between'} style={{ color: 'var(--tertiary-blue-color)' }}>

                            <Grid item className={styles['event-types']}>
                                <div className={styles['photowalk']}>{'Photowalk'}</div>
                                <div className={styles['free']}>{'FREE'}</div>
                            </Grid>

                            <Grid item className={styles['event-avatar']}>

                                <CustomAvatar numberOfAvatars={4} variant={'circular'} imageAvatars={imageAvatars}
                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', color: 'red' }}
                                    className={styles['avatar-font-color']}
                                />

                            </Grid>

                        </Grid>
                    </Grid>
                )
            })}
        </>
    )
}

export default HomeEvents