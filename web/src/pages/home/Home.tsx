import { AppBar, Box, Grid, Stack, Toolbar } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import Feeds from './feeds/Feeds'
import HomeProjects from './home-projects/HomeProjects'
import styles from './Home.module.css'
import { EventsArtistJson, projectArtistJson } from 'src/core/json/HomePageJson'
import { constants } from '@sekeron/domain';
import { FeedJson } from 'src/core/json/HomePageJson';
import HomeEvents from './home-events/HomeEvents';
import Carousel from 'src/components/common/carousel/Carousel';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import routesNames from 'src/routes/RouteNames'
import { mobileHeaderMenu } from 'src/core/json/HeaderMenuJson'
import MobileDrawer from 'src/components/common/mobile-bottom-drawer/MobileDrawer'
import DrawerNotificationContent from '../notifications/drawer-notification/DrawerNotificationContent'
import ImageAssets from 'src/assets'

const Home = (props) => {

    const navigate = useNavigate();
    const { isAppliedOpacity } = props;

    const [openNotificationDrawyer, setOpenNotificationDrawer] = useState(false);

    const location: any = useLocation();

    useEffect(() => {
        if (location.pathname == '/notifications') {
            setOpenNotificationDrawer(true)
        }
    }, [])

    const handleClickOnSeeAllEvents = () => {
        navigate(routesNames.events)
    }

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenNotificationDrawer(newOpen);
    };

    return (
        <React.Fragment>
            <Grid container className={isAppliedOpacity ? styles['home-grid-container-blur'] : styles['home-grid-container']}>
                {!isAppliedOpacity && <AppBar sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: "none", xl: 'none', pb: "200px" } }} className={styles["appbar"]}>
                    <Toolbar component="nav" sx={{ justifyContent: "space-between", pr: { md: 0 }, maxHeight: { xs: "50px", md: "61px" } }}>
                        <Box
                            sx={{
                                mr: { sm: 0, md: 0, lg: 0, xl: 2 }, display: { xs: "block", md: "none" }
                            }}
                        >
                            <img src={ImageAssets.ic_sekeron_logo} style={{ width: "155px" }} />
                        </Box>
                        <Box sx={{
                            display: { xs: 'block', sm: "block", md: 'none' }, width: '25%'
                        }}>
                            <Stack
                                sx={{ justifyContent: { xs: 'space-between' } }}
                            >
                                {
                                    mobileHeaderMenu.map((item: any, index: number) => {
                                        return (
                                            <div key={index}>
                                                <NavLink
                                                    key={index}
                                                    to={item.path}
                                                    className={({ isActive }) =>
                                                        isActive || location === item.path
                                                            ? styles["menu-item-active"]
                                                            : styles["menu-item"]
                                                    }
                                                    children={({ isActive }) => {
                                                        return (
                                                            <Fragment>
                                                                {item.label === 'Notifications' ?
                                                                    (
                                                                        <MobileDrawer open={openNotificationDrawyer} toggleDrawer={toggleDrawer} drawerContent={<DrawerNotificationContent setOpenNotificationDrawer={setOpenNotificationDrawer} />}>
                                                                            <img
                                                                                className={styles["nav-menu-icons"]}
                                                                                src={isActive ? item.activeIcon : item.icon}
                                                                                alt="nav-menu-icons"
                                                                                onClick={() => {
                                                                                    setOpenNotificationDrawer(true)
                                                                                }}
                                                                            />
                                                                        </MobileDrawer>
                                                                    )
                                                                    :
                                                                    <img
                                                                        className={styles["nav-menu-icons"]}
                                                                        src={isActive ? item.activeIcon : item.icon}
                                                                        alt="nav-menu-icons"
                                                                    />}
                                                            </Fragment>
                                                        )
                                                    }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </Stack >

                        </Box >
                    </Toolbar >
                </AppBar>}


                <Grid container className={styles['slider-container']}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={styles['slider-sub-container']}>
                        <Carousel isAutoPlay={true} />
                    </Grid>
                </Grid>

                <Grid container className={styles['after-slider-container']}>

                    <Grid item xs={12} sm={12} md={3.3} lg={2.9} xl={2.9} justifyContent={{ sm: 'center' }} className={styles['project']}>
                        <Grid container className={styles['position-sticky']}>
                            <Grid item xs={12} sm={12} container className={styles['project-header-container']} justifyContent={'space-between'}>
                                <Grid item className={styles['project-text']} >{constants.projects}</Grid>
                                <Grid item className={styles['see-all-text']} >{constants.seeAll}</Grid>
                            </Grid>
                            <Grid container className={styles['project-container']} justifyContent={'space-between'} >
                                <HomeProjects projectArtist={projectArtistJson} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4.9} lg={4.7} xl={4.7} className={styles['home-container']}>
                        <Feeds FeedJson={FeedJson} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={3.3} lg={2.9} xl={2.9} className={styles['events']}>
                        <Grid container className={styles['position-sticky']}>
                            <Grid item container className={styles['events-header-container']} justifyContent={'space-between'}>
                                <Grid item className={styles['events-text']} >{constants.events}</Grid>
                                <Grid item className={styles['see-all-text']} onClick={handleClickOnSeeAllEvents} >{constants.seeAll}</Grid>
                            </Grid>
                            <Grid container className={styles['events-container']} justifyContent={'space-between'} >
                                <HomeEvents eventsOfArtist={EventsArtistJson} />
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default Home;