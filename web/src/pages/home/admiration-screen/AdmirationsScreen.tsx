import { Grid, Stack } from '@mui/material'
import { constants, FeedsEnum, strings } from '@sekeron/domain'
import React, { useEffect, useState } from 'react'
import { MuiStyledButton } from 'src/components/common/button/MuiButton'
import styles from './AdmirationsScreen.module.css'
import { admirationData } from 'src/core/json/HomePageJson'
import { SearchBar } from 'src/components/common/search-bar/SearchBar'

const AdmirationsScreen = ({ popUpType }) => {

    const [admirations, setAdmirations] = useState([])

    useEffect(() => {
        setAdmirations(admirationData)
    }, [])

    const handleChangeFollowButton = (index: number) => {
        const admirationsData = admirations?.map((admires, admireIndex) => {
            if (admireIndex == index) {
                return {
                    ...admires,
                    isFollowing: !admires?.isFollowing
                }
            } else {
                return admires
            }
        })
        setAdmirations(admirationsData)

    }

    return (
        <React.Fragment>

            <div className={styles['search-bar-container']}>
                <div className={styles['search-bar']}>
                    <SearchBar sx={{ color: 'white' }} />
                </div>
            </div>

            <div className={styles['admiration-container']}>

                {admirations?.map((data, dataIndex) => {
                    return (
                        <Grid container justifyContent={'space-between'} sx={{ p: '10px 0px' }} >

                            <Grid item xs={8} sx={{ p: { xs: '5px', sm: '10px 10px 10px 30px' }, display: 'flex', alignItems: "center" }}>
                                <img alt={'profile-image'} className={styles['profile-image']} src={data?.profileImage} />
                                <div className={styles['artist-details']}>
                                    <span className={styles['name']}>{data.name}</span>
                                    <span className={styles['proffession']} >{data.proffesion}</span>
                                </div>
                            </Grid>

                            <Grid item xs={4} className={styles['follow-buttons']}>
                                <MuiStyledButton className={data?.isFollowing ? 'cropped-button' : 'follow-button'} onClick={() => handleChangeFollowButton(dataIndex)} >
                                    {popUpType == FeedsEnum.admirationDialog ? data?.isFollowing ? constants.following : constants.follow : data?.isFollowing ? 'sent' : 'send'}
                                </MuiStyledButton>
                            </Grid>
                        </Grid>
                    )
                })}

            </div>

        </React.Fragment>
    )
}

export default AdmirationsScreen