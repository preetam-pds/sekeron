import { Grid } from '@mui/material'
import React from 'react'
import ImageAssets from 'src/assets'
import styles from './HomeProjects.module.css'

interface IHomeProjectsProps {
    projectArtist: Array<any>
}

const HomeProjects = (homeProjectsProps: IHomeProjectsProps) => {
    const { projectArtist } = homeProjectsProps
    return (
        <>
            {projectArtist?.map((item, index) => {
                return (
                    <Grid key={index} container rowGap={1.5} className={projectArtist.length - 1 == index ? styles['project-artist-container-last'] : styles['project-artist-container']}>

                        <Grid container justifyContent={'space-between'}>
                            <Grid item className={styles['location-text']} xs={9} sm={9} >{item.projectLocation}</Grid>
                            <Grid item>
                                <img alt='forword-icon' className={styles['forword-icon']} src={ImageAssets.ic_dropdown} />
                            </Grid>
                        </Grid>

                        <Grid container style={{ color: 'var(--tertiary-blue-color)' }}>
                            <Grid className={styles['project-type-text']} item>{item.projectType}</Grid>
                        </Grid>

                        <Grid container>
                            <img alt={'artist-image'} className={styles['profile-image']} src={item?.artistImage} />
                            <Grid className={styles['project-season-container']} item>{item.season}</Grid>
                        </Grid>

                    </Grid>
                )
            })}
        </>
    )
}

export default HomeProjects