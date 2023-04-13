import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Dashboard.module.css'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Stack } from '@mui/system';
import { dashboardJson, dashboardExploreJson, strings } from '@sekeron/domain';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import routesNames from 'src/routes/RouteNames';

const Dashboard = () => {

    const navigate = useNavigate()

    return (
        <div className={styles["container"]}>
            <Stack alignItems={"center"} className={styles["mobile-header-container"]}>
                <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(-1)} />
                <Typography>{strings.myDashboard}</Typography>
            </Stack>
            <div className={styles["sub-container"]} >
                <Grid container className={styles["my-project-container"]}>
                    {dashboardJson.map((item) => (
                        <Grid item xs={5.8} sm={5.4} md={2.9} lg={2.9} xl={2.9}>
                            <Card className={styles["module-card"]}>
                                <div className={styles["total-number-container"]}>
                                    <Typography>2</Typography>
                                </div>
                                <Stack className={styles["module-name-container"]}>
                                    <Typography >{item.title}</Typography>
                                    <ChevronRightRoundedIcon onClick={() => navigate(item.path)} />
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <hr className={styles["line-break"]} />
                <Grid className={styles["explore-container"]} container rowGap={2.5}>
                    {dashboardExploreJson.map((item) => (
                        <Grid item xs={11} sm={8} md={3.9} lg={3.9} xl={3.9} >
                            <Card className={styles["explore-card"]}>
                                <Stack className={styles["explore-card-sub-container"]}>
                                    <Typography className={styles["explore-card-header"]}>{item.title}</Typography>
                                    <Stack className={styles["description"]}>
                                        <Typography >{item.description}</Typography>
                                        <ChevronRightRoundedIcon onClick={() => navigate(item.path)} />
                                    </Stack>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard