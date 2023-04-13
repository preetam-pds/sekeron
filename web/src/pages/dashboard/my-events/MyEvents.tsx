import { Card, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageAssets from 'src/assets'
import CustomAvatar from 'src/components/common/avatar/MuiAvatar'
import { MuiButton } from 'src/components/common/button/MuiButton'
import { OutlinedTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher'
import styles from './MyEvents.module.css'
import { MyProjectsJson, strings } from '@sekeron/domain'
import routesNames from 'src/routes/RouteNames'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useNavigate } from 'react-router-dom'

const MyEvents = () => {

    const arr = [
        {
            imageUrl: ImageAssets.ic_artist_image,
            id: 1,
        },
    ];

    const imageAvatars = [
        {
            imageUrl: ImageAssets.ic_artist_image,
            id: 1,
        },
        {
            imageUrl: ImageAssets.ic_artist_image,
            id: 2,
        },
        {
            imageUrl: ImageAssets.ic_artist_image,
            id: 3,
        },
        {
            imageUrl: ImageAssets.ic_artist_image,
            id: 4,
        },
    ];

    const [tabValue, setTabValue] = useState<any>(0);
    const navigate = useNavigate()

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log("newValuenewValue", newValue)
        setTabValue(newValue);
    };

    const ProjectCard = () => {
        return (
            <Stack className={styles["events-main-container"]}>
                <Stack className={styles["events-sub-container"]} columnGap={1}>
                    <CustomAvatar
                        imageAvatars={arr}
                        numberOfAvatars={1}
                        variant="square"
                        sx={{ width: { xs: 70, sm: 90 }, height: { xs: 70, sm: 90 } }} />
                    <Stack className={styles["event-info-container"]}>
                        <Typography className={styles["card-header"]}>Spring Poster Design Contest</Typography>
                        <Typography className={styles["card-sub-header"]}>Hosted by Sekeron</Typography>
                        <MuiButton className={styles["meeting-location"]}>Photowalk</MuiButton>
                    </Stack>
                    <div className={styles["follower-lists"]}>
                        <CustomAvatar
                            imageAvatars={imageAvatars}
                            numberOfAvatars={3}
                            variant="circular"
                            sx={{ width: 24, height: 24 }} />
                    </div>
                </Stack>
                <Stack columnGap={2}>
                    <Stack className={styles["event-date-and-time-container"]}>
                        <img src={ImageAssets.ic_calender} />
                        <Typography className={styles["event-date-and-time"]}>7PM, 12th June - 9AM 14th August </Typography>
                    </Stack>
                    <Stack className={styles["event-date-and-time-container"]}>
                        <img src={ImageAssets.ic_location} />
                        <Typography>Jaynagar, Bengaluru</Typography>
                    </Stack>
                </Stack>
            </Stack>
        )
    }

    const tabdata = [{ id: 0, name: "Ongoing", value: 0 }, { id: 1, name: "Upcoming", value: 1 }, { id: 2, name: "Completed", value: 2 }]
    return (
        <div className={styles["main-container"]}>
            <Stack alignItems={"center"} className={styles["mobile-header-container"]}>
                <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(routesNames.createProject)} />
                <Typography>{strings.myEvents}</Typography>
            </Stack>
            <div className={styles["sub-container"]}>
                <div className={styles["tabs-container"]}>
                    <OutlinedTabSwitcher tabdata={tabdata} tabvalue={tabValue} handletabvalue={handleTabChange} />
                </div>
                <div className={styles["events-container"]}>
                    <Grid container rowGap={3} justifyContent={"space-between"}>
                        {tabValue === 0 ?
                            MyProjectsJson.ongoing.map((item) => (
                                <Grid item xs={12} md={5.8} xl={5.8} >
                                    <Card className={styles["event-carad-container"]}>
                                        {ProjectCard()}
                                    </Card>
                                </Grid>
                            )) : null}
                        {tabValue === 1 ?
                            MyProjectsJson.upcoming.map((item) => (
                                <Grid item xs={12} md={5.8} xl={5.8}>
                                    <Card className={styles["event-carad-container"]}>
                                        {ProjectCard()}
                                    </Card>
                                </Grid>

                            ))
                            : null}
                        {tabValue === 2 ?
                            MyProjectsJson.completed.map((item) => (
                                <Grid item xs={12} md={5.8} xl={5.8}>
                                    <Card className={styles["event-carad-container"]}>
                                        {ProjectCard()}
                                    </Card>
                                </Grid>
                            ))
                            : null}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default MyEvents