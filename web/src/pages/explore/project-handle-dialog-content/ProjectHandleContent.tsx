import { Button, Divider, Stack } from '@mui/material';
import { strings } from '@sekeron/domain';
import React from 'react';
import ImageAssets from 'src/assets';
import styles from './ProjectHandleContent.module.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MuiButton, MuiStyledButton } from 'src/components/common/button/MuiButton';

const ProjectHandleContent = () => {
    return (
        <div className={styles['project-dialog-content']} >
            <Stack gap={3} direction={'column'} >
                <Stack >
                    <img src={'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='}
                        alt={'profile-image'} className={styles['project-image']} />
                    <Stack direction={'column'} rowGap={1} className={styles['project-details']}>
                        <span className={styles['project-status']}   >Ongoing</span>
                        <span className={styles['profile-details']} >
                            <span style={{ display: 'flex', alignItems: 'center' }} >
                                <img src={'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='}
                                    alt={'profile-image'} className={styles['profile-image']} />
                                <span className={styles['project-season']}>April Summers</span>
                            </span>
                            <span className={styles['project-ratings']}>
                                <img src={ImageAssets.ic_star} />
                                <span className={styles['project-rating-number']}>4.3</span>
                                <span className={styles['follow']} >{strings.following}</span>
                            </span>
                        </span>
                    </Stack>
                </Stack>
                <Stack alignItems={'center'} >
                    <CalendarMonthIcon className={styles['calendar']} />
                    <span className={styles['date']} >12/01/2022 - 09/07/2022</span>
                </Stack>
                <Divider className={styles['divider']} />
                <Stack gap={2} direction={'column'}>
                    <div className={styles['description']} >Description</div>
                    <div className={styles['description-details']}>
                        <span className={styles['description-header']}>Mute the saint</span>Mute the Saint is a music project. Description about the project will go here. A music project. Description about the project will go here.
                        A music project. Description about the project will
                    </div>
                    <div className={styles['project-type']}>Project Type: <span className={styles['project-status']}>Online</span> </div>
                    <div className={styles['project-type']}>Ownership Type: <span className={styles['project-status']}>Joint</span></div>
                    <Divider className={styles['divider']} sx={{ width: "70%" }} />
                </Stack>
                <Divider className={styles['divider']} />
                <Stack gap={2} className={styles['artist']} direction={'column'} >
                    <Stack className={styles['artist-type']}>
                        <div className={styles['artist-type-div']}>
                            <span className={styles['artist-profession']} >Guitarist</span>
                            <span className={styles['artist-count']} >2/10</span>
                        </div>
                        <div className={styles['artist-type-div']}>
                            <MuiButton className={styles['next']}>Apply</MuiButton>
                        </div>
                    </Stack>
                    <Stack className={styles['artist-type']}>
                        <div className={styles['artist-type-div']}>
                            <span className={styles['artist-profession']} >Guitarist</span>
                            <span className={styles['artist-count']} >2/10</span>
                        </div>
                        <div className={styles['artist-type-div']}>
                            <MuiButton className={styles['next']}>Apply</MuiButton>
                        </div>
                    </Stack>
                    <Stack className={styles['artist-type']}>
                        <div className={styles['artist-type-div']}>
                            <span className={styles['artist-profession']} >Guitarist</span>
                            <span className={styles['artist-count']} >2/10</span>
                        </div>
                        <div className={styles['artist-type-div']}>
                            <MuiButton className={styles['next']}>Apply</MuiButton>
                        </div>
                    </Stack>
                    <Stack className={styles['artist-type']}>
                        <div className={styles['artist-type-div']}>
                            <span className={styles['artist-profession']} >Guitarist</span>
                            <span className={styles['artist-count']} >2/10</span>
                        </div>
                        <div className={styles['artist-type-div']}>
                            <MuiButton className={styles['next']}>Apply</MuiButton>
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </div >
    )
}

export default ProjectHandleContent