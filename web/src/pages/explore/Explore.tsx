import { Grid, Stack, Typography } from '@mui/material';
import { ExploreTabEnumUtils, strings } from '@sekeron/domain';
import { ExploreRedux } from '@sekeron/domain/dist/redux/explore-redux/ExploreRedux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ImageAssets from 'src/assets';
import CommonDialog from 'src/components/common/dailog/common-dialog/CommonDialog';
import MuiTooltip from 'src/components/common/mui-tooltip/MuiTooltip';
import { FilledTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher';
import FilterCard from '../events/event-filter-card/FilterCard';
import styles from './Explore.module.css';
import ProfileCard from './profile-card/ProfileCard';
import ProjectHandleContent from './project-handle-dialog-content/ProjectHandleContent';
import TopBlogsCard from './top-blogs-card/TopBlogsCard';
import TopEventsCard from './top-events-card/TopEventsCard';
import TopProjectCard from './top-project-card/TopProjectCard';

const Explore = () => {

    const location = useLocation();
    const exploreState = useSelector((state: any) => state.ExploreRedux)

    const [tabValue, setTabValue] = useState<any>(0);
    const [openTooltip, setOpenTooltip] = useState(false);
    const [openProjectDialog, setOpenProjectDailog] = useState(false);

    useEffect(() => {
        if (location?.state?.tabValue == null) {
            setTabValue(0)
        } else {
            setTabValue(location?.state?.tabValue)
        }
    }, [location])

    const actionDispatch = ((dispatch: any) => ({
        setExploreState: (data: any) => dispatch(ExploreRedux.actions.setExploreState(data)),
    }))

    const { setExploreState } = actionDispatch(useDispatch())

    const handleTabValue = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleTooltipClose = () => {
        setOpenTooltip(false);
    };

    const handleTooltipOpen = () => {
        setOpenTooltip(true);
    };

    const handleApplyFilters = () => {
        setOpenTooltip(false);
    }

    const handleChangeExplore = (name: string, index: number) => {
        console.log(name, index, 'index')
        const explore = { ...exploreState.exploreData }
        const changedExplore = explore[name]?.map((explore, exploreIndex) => {
            if (exploreIndex == index) {
                return {
                    ...explore,
                    isFollowing: !explore.isFollowing
                }
            } else {
                return explore
            }
        })
        explore[name] = changedExplore;
        setExploreState({ key: "exploreData", value: explore })
    }

    // project card dilog box handlers

    const openProjectDialogBox = () => {
        setOpenProjectDailog(true)
    }

    const closeProjectDialogBox = () => {
        setOpenProjectDailog(false)
    }

    return (
        <>

            <div>
                {<CommonDialog open={openProjectDialog} title={<div className={styles['project-dialog-header']} >Adventure of Delia</div>} onClose={closeProjectDialogBox} >
                    <ProjectHandleContent />
                </CommonDialog>}
            </div>

            <div className={styles['explore-container']} >
                <Stack gap={6} flexDirection={'column'} sx={{ pb: '70px', width: '100%' }}>

                    <Stack sx={{ width: { xs: "100%", md: '100%', lg: '90%', xl: '75%' } }} justifyContent={'flex-start'} className={styles['sticky-tab-switcher']} >
                        <div className={styles['filter']}>
                            <MuiTooltip handleTooltipClose={handleTooltipClose} open={openTooltip} title={<FilterCard handleApplyFilters={handleApplyFilters} />} placement={'right'} >
                                <img src={ImageAssets.ic_filter} className={styles['ic-filter']} onClick={handleTooltipOpen} />
                            </MuiTooltip>
                        </div>
                        <FilledTabSwitcher tabvalue={tabValue} handletabvalue={handleTabValue} tabdata={ExploreTabEnumUtils.getExploreTabEnumUtils()} />
                    </Stack>

                    {(tabValue == 0 || tabValue == 2) && <Stack gap={{ xs: 3, sm: 5 }} flexDirection={'column'} >
                        {tabValue == 0 && <Typography className={styles['header-tags']} onClick={openProjectDialogBox} >{strings.topProjects}</Typography>}
                        <Grid container gap={{ xs: 2, lg: 2, xl: 3 }}>
                            {exploreState?.exploreData?.topProjects?.map((project, projectIndex) => {
                                return (
                                    <Grid key={projectIndex} item xs={5.6} sm={3.6} md={2.7} lg={2.18} xl={2.2} >
                                        <TopProjectCard project={project} projectIndex={projectIndex} handleChangeProject={handleChangeExplore} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Stack>}

                    {(tabValue == 0 || tabValue == 4) && < Stack gap={{ xs: 3, sm: 5 }} flexDirection={'column'} >
                        {tabValue == 0 && <Typography className={styles['header-tags']}>{strings.topEvents}</Typography>}
                        <Grid container gap={{ xs: 2, lg: 2, xl: 3 }}>
                            {exploreState?.exploreData?.topEvents?.map((events, eventIndex) => {
                                return (
                                    <Grid key={eventIndex} item xs={5.6} sm={3.6} md={2.7} lg={2.18} xl={2.2}>
                                        <TopEventsCard topEvent={events} eventIndex={eventIndex} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Stack>}

                    {tabValue == 0 && < Stack className={styles['featured-artists']} gap={2} flexDirection={'column'}>
                        {tabValue == 0 && <Typography className={styles['artists-tag']}>{strings.featuredArtists}</Typography>}
                        <div className={styles['profile-list']} >
                            {exploreState?.exploreData?.feauturedArtist?.map((featuredArtist, featuredArtistIndex) => {
                                return (
                                    <div key={featuredArtistIndex} style={{ padding: "5px" }} >
                                        <div className={styles['artists-profile']}>
                                            <img className={styles['profile']} src={featuredArtist.artistProfile} alt={'profile-image'} />
                                            <Typography className={styles['name']}>{featuredArtist.artistName}</Typography>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Stack>}

                    {(tabValue == 0 || tabValue == 5) && < Stack gap={{ xs: 3, sm: 5 }} flexDirection={'column'} >
                        {tabValue == 0 && <Typography className={styles['header-tags']}>{strings.topBlogs}</Typography>}
                        <Grid container gap={{ xs: 2, lg: 2, xl: 3 }}>
                            {exploreState?.exploreData?.topBlogs?.map((blog, blogIndex) => {
                                return (
                                    <Grid key={blogIndex} item xs={5.6} sm={3.6} md={2.7} lg={2.18} xl={2.2}>
                                        <TopBlogsCard topBlog={blog} blogIndex={blogIndex} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Stack>}

                    {tabValue == 3 && <Stack>
                        <Grid container gap={4}>
                            {exploreState?.exploreData?.feauturedArtist?.map((people, peopleIndex) => {
                                return (
                                    <Grid item xs={12} sm={12} md={5.65} lg={5.7} xl={3.75}>
                                        <ProfileCard key={peopleIndex} people={people} index={peopleIndex} handleChangeProfile={handleChangeExplore} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Stack>}

                </Stack>
            </div >
        </>
    )
}

export default Explore