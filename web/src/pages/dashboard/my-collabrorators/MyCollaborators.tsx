import { Card, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageAssets from 'src/assets'
import CustomAvatar from 'src/components/common/avatar/MuiAvatar'
import { MuiButton } from 'src/components/common/button/MuiButton'
import { OutlinedTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher'
import styles from './MyCollaborators.module.css'
import { MyProjectsJson, strings } from '@sekeron/domain'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import routesNames from 'src/routes/RouteNames'
import { useNavigate } from 'react-router-dom'

const MyCollaborators = () => {

    const arr = [
        {
            imageUrl: ImageAssets.ic_artist_image,
            id: 1,
        },
    ];

    const navigate = useNavigate()
    const [tabValue, setTabValue] = useState<any>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log("newValuenewValue", newValue)
        setTabValue(newValue);
    };

    const ProjectCard = () => {
        return (
            <Grid container className={styles["card-container"]}>
                <Grid item xs={12}>
                    <Stack className={styles["meeting-time-and-date"]}>
                        <Typography >SEPR220212</Typography>
                        <Typography>12/01/2022 - 09/07/2022</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} className={styles["profile-container"]}>
                    <Stack columnGap={1} textAlign={"start"}>
                        <CustomAvatar
                            imageAvatars={arr}
                            numberOfAvatars={1}
                            variant="square"
                            sx={{ width: { xs: 70, sm: 90 }, height: { xs: 70, sm: 90 } }} />
                        <Stack direction={"column"} rowGap={0.5} className={styles["info-container"]}>
                            <Typography className={styles["card-header"]}>Mute the Saint</Typography>
                            <Stack columnGap={1}>
                                <CustomAvatar
                                    imageAvatars={arr}
                                    numberOfAvatars={1}
                                    variant="circular"
                                    sx={{ width: 24, height: 24 }} />
                                <Typography className={styles["profile-name"]}>April Summers</Typography>
                                <Typography className={styles["user-relationship-status"]}>Following</Typography>
                            </Stack>
                            <Typography className={styles["collaboration-status"]}>22 Artists Collaborating</Typography>
                        </Stack>
                        <Stack className={styles["updates-container"]}>
                            <img src={ImageAssets.ic_notification_enabled} />
                            <Typography className={styles["notifications"]}>5 Updates</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        )
    }

    const tabdata = [{ id: 0, name: "Ongoing", value: 0 }, { id: 1, name: "Upcoming", value: 1 }, { id: 2, name: "Completed", value: 2 }]

    return (
        <div className={styles["main-container"]}>

            <Stack alignItems={"center"} className={styles["mobile-header-container"]}>
                <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(routesNames.dashboard)} />
                <Typography>{strings.myCollaborations}</Typography>
            </Stack>

            <div className={styles["sub-container"]}>
                <div className={styles["tabs-container"]}>
                    <OutlinedTabSwitcher tabdata={tabdata} tabvalue={tabValue} handletabvalue={handleTabChange} />
                </div>
                <div className={styles["collaborators-container"]}>
                    <Grid container rowGap={3} justifyContent={"space-between"}>
                        {tabValue === 0 ?
                            MyProjectsJson.ongoing.map((item) => (
                                <Grid item xs={12} md={5.8} xl={5.8} >
                                    <Card className={styles["collaborator-card-container"]}>
                                        {ProjectCard()}
                                    </Card>
                                </Grid>
                            )) : null}
                        {tabValue === 1 ?
                            MyProjectsJson.upcoming.map((item) => (
                                <Grid item xs={12} md={5.8} xl={5.8}>
                                    <Card className={styles["collaborator-card-container"]}>
                                        {ProjectCard()}
                                    </Card>
                                </Grid>
                            ))
                            : null}
                        {tabValue === 2 ?
                            MyProjectsJson.completed.map((item) => (
                                <Grid item xs={12} md={5.8} xl={5.8}>
                                    <Card className={styles["collaborator-card-container"]}>
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

export default MyCollaborators