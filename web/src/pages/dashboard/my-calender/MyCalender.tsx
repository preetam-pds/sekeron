import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import { myCalenderJson, strings } from '@sekeron/domain'
import React, { useState } from 'react'
import ImageAssets from 'src/assets'
import CustomAvatar from 'src/components/common/avatar/MuiAvatar'
import { MuiStaticDatePicker } from 'src/components/common/datepicker/MuiDatepicker'
import MuiGradientTabs from 'src/components/common/mui-tabs/gradient-tabs/MuiGradientTabs'
import styles from './MyCalender.module.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import routesNames from 'src/routes/RouteNames'
import { useNavigate } from 'react-router-dom'

const MyCalender = () => {

    const tabData = [
        {
            id: 1,
            name: "Projects",
            value: "Projects",
        },
        {
            id: 2,
            name: "Events",
            value: "Events",
        }
    ]

    const arr = [
        {
            imageUrl: ImageAssets.ic_friend_two,
            id: 1,
        },
    ];

    const navigate = useNavigate()
    const [tabValue, setTabValue] = useState<Number>(0);

    const handleTabChange = (event: React.SyntheticEvent, value: Number) => {
        setTabValue(value);
    };


    const renderProjectMeetingCard = (isTasksCard: boolean, item: any) => {
        return (
            <Stack className={styles["meeting-card"]}>
                <Stack direction={"column"} className={styles["date-container"]}>
                    <Typography>19th</Typography>
                    <Typography>SEP</Typography>
                </Stack>
                {!isTasksCard ?
                    <Stack direction={"column"} className={styles["meeting-details-container"]}>
                        <Stack columnGap={2}>
                            <Stack columnGap={1}>
                                <CustomAvatar
                                    imageAvatars={arr}
                                    numberOfAvatars={1}
                                    variant="square"
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography className={styles["project-title"]}>Mute the Saint</Typography>
                            </Stack>
                            <a className={styles["meeting-link"]}>meet.google.com/jez-wnom-sctmeet.google.com/jez-wnom-sct</a>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography className={styles["meeting-scheduled-text"]}>Meeting Scheduled</Typography>
                            <Typography className={styles["project-title"]}>9:30 AM - 10:30 AM</Typography>
                        </Stack>
                    </Stack> :
                    <Stack direction={"column"} className={styles["meeting-details-container"]}>
                        <Stack columnGap={1}>
                            <CustomAvatar
                                imageAvatars={arr}
                                numberOfAvatars={1}
                                variant="square"
                                sx={{ width: 24, height: 24 }}
                            />
                            <Typography className={styles["project-title"]}>Mute the Saint</Typography>
                        </Stack>
                        <Typography className={styles["project-title"]}>Music Task</Typography>
                        <Stack justifyContent={"space-between"}>
                            <Typography className={styles["tasks"]}>1. Task details goes here goes here goe</Typography>
                            <Stack className={styles["date"]}>
                                <img src={ImageAssets.ic_datepicker} />
                                <Typography>12/01/2022</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                }
            </Stack>
        )
    }

    const renderEventsCard = (item) => {
        return (
            <Stack className={styles["meeting-card"]}>
                <Stack direction={"column"} className={styles["date-container"]}>
                    <Typography>19th</Typography>
                    <Typography>SEP</Typography>
                </Stack>
                <Stack direction={"column"} className={styles["meeting-details-container"]}>
                    <Stack columnGap={1}>
                        <CustomAvatar
                            imageAvatars={arr}
                            numberOfAvatars={1}
                            variant="square"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Typography className={styles["project-title"]}>Spring Poster Design Contest</Typography>
                    </Stack>
                    <Stack columnGap={2}>
                        <Stack columnGap={1} className={styles["event-location-info"]}>
                            <img src={ImageAssets.ic_calender} />
                            <Typography >7PM, 12th June - 9AM 14th August</Typography>
                        </Stack>
                        <Stack columnGap={1} className={styles["event-location-info"]}>
                            <img src={ImageAssets.ic_location} />
                            <Typography>Jaynagar, Bengaluru</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        )
    }

    return (
        <div className={styles["my-calender-container"]}>
            <Stack className={styles["mobile-header-container"]}>
                <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(routesNames.dashboard)} />
                <Typography>{strings.myEvents}</Typography>
            </Stack>
            <Grid container className={styles["sub-container"]}>
                <Grid xs={8} sm={8} md={5.9} item lg={5} xl={5} className={styles["grid-item-container"]}>
                    <MuiStaticDatePicker />
                </Grid>
                <Grid item xs={8} sm={8} md={5.9} lg={6.7} xl={6.7} className={styles["grid-item-container"]}>
                    <Stack direction={"column"} rowGap={3} className={styles["container"]}>
                        <MuiGradientTabs
                            tabValue={tabValue}
                            handleTabChange={handleTabChange}
                            tabData={tabData}
                        />
                        <Stack direction={"column"} rowGap={3} className={styles["cards-container"]}>
                            {tabValue === 0 ? myCalenderJson.projects.map((item) => (
                                renderProjectMeetingCard(true, item)
                            )) :
                                myCalenderJson.events.map((item) => (
                                    renderEventsCard(item)
                                ))
                            }
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <Stack direction={"column"} rowGap={1} className={styles["mobile-container"]}>
                <div className={styles["mobile-datepicker-container"]}>
                    <MuiStaticDatePicker />
                </div>
                <Stack direction={"column"} rowGap={3} className={styles["mobile-meeting-cards-container"]}>
                    {myCalenderJson.projects.map((item) => (
                        renderProjectMeetingCard(true, item)
                    ))}

                    {myCalenderJson.events.map((item) => (
                        renderEventsCard(item)
                    ))}
                </Stack>
            </Stack>
        </div>
    )
}

export default MyCalender