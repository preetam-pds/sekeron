import { Grid, Stack } from '@mui/material';
import { strings } from '@sekeron/domain';
import React from 'react';
import ImageAssets from 'src/assets';
import styles from './TopProjectCard.module.css';

const TopProjectCard = ({ project, projectIndex, handleChangeProject }) => {
    const { profileImage, profileName, projectPlace, isFollowing } = project;
    return (
        <Grid key={projectIndex} container className={styles['card-container']}>
            <img src={ImageAssets.ic_artist_image_6} alt='explore-image' className={styles['card-image']} />
            <Stack className={styles['card-details']} rowGap={1} >
                <span className={styles['event-place']} >{projectPlace}</span>
                <span className={styles['profile']} >
                    <img className={styles['profile-image']} src={profileImage} alt={'profile-image'} />
                    <span className={styles['profile-name']} >{profileName}</span>
                </span>
                <span className={styles['profile-follow']} onClick={() => handleChangeProject('topProjects', projectIndex)} >{!isFollowing ? strings.follow : ''}</span>
            </Stack>
        </Grid>
    )
}

export default TopProjectCard