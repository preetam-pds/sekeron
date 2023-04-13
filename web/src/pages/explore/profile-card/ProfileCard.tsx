import { Grid, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { MuiButton, GradientButton, MuiStyledButton } from 'src/components/common/button/MuiButton';
import styles from './ProfileCard.module.css'

interface IPeopleCard {
    people: any
    handleChangeProfile: any
    index: number
}

const ProfileCard = ({ people, handleChangeProfile, index }: IPeopleCard) => {

    const { artistName, artistProfile, coverImage, isFollowing, artistType } = people;
    return (
        <>
            <Grid key={index} container className={styles['people-card']}>
                <img className={styles['cover-image']} src={coverImage} />
                <img className={styles['profile-image']} src={artistProfile} />
                <Stack rowGap={3} direction={'column'} sx={{ width: '100%' }}  >
                    <div className={styles['profile-container']}>
                        <span className={styles['profile-name']}>{artistName.split(' ')[0]}</span>
                        <Stack gap={1} className={styles['buttons']}>
                            <MuiButton className={styles["follow"]}>Follow</MuiButton>
                            <MuiButton className={styles["message"]}>Message</MuiButton>
                        </Stack>
                    </div>
                    <div className={styles['proffession-details']}>
                        <span className={styles['proffession']}>
                            {artistType?.map((artist, artistTypeIndex) => {
                                return (
                                    <span key={artistTypeIndex} className={styles['proffession-text']} >{artist?.type}</span>
                                )
                            })}
                        </span>
                    </div>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={styles['people-card-mobile']}>
                <Stack justifyContent={'space-between'} >
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <img className={styles['profile-image-mobile']} src={artistProfile} />
                        <span className={styles['profile-details']} >
                            <span className={styles['profile-short-name']}>{artistName.split(' ')[0]}</span>
                            <span className={styles['profile-full-name']}>{artistName}</span>
                        </span>
                    </Stack>
                    <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }} >
                        {isFollowing ?
                            <MuiStyledButton className={'cropped-button'} onClick={() => handleChangeProfile('feauturedArtist', index)} >Following</MuiStyledButton>
                            :
                            <MuiStyledButton className={'follow-button'} onClick={() => handleChangeProfile('feauturedArtist', index)} >Follow</MuiStyledButton>
                        }
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}

export default ProfileCard