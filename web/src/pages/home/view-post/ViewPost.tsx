import React, { useEffect, useRef, useState } from 'react';
import { Grid, Tooltip, Typography } from '@mui/material';
import { constants, FeedsEnum, MediaTypeEum, strings } from '@sekeron/domain';
import ImageAssets from 'src/assets';
import VideoPlayer from 'src/components/common/video-player/VideoPlayer';
import routesNames from 'src/routes/RouteNames';
import styles from './ViewPost.module.css'
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import TextCard from 'src/components/common/text-card/TextCard';
import CommonDialog from 'src/components/common/dailog/common-dialog/CommonDialog';
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer';
import AdmirationsScreen from '../admiration-screen/AdmirationsScreen';
import CommentScreen from '../comment-screen/CommentScreen';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from 'react-redux';
import { HomeRedux } from '@sekeron/domain/dist/redux/home-redux/HomeRedux';

interface IViewPostProps {

}

const ViewPost = (viewPostProps: IViewPostProps) => {

    const location = useLocation();
    const navigate = useNavigate();
    const homeState = useSelector((state: any) => state.HomeRedux);

    const [viewPosts, setViewPosts] = useState(location?.state?.mediaData);
    const [isDialogOpened, setIsDialogOpened] = useState(false);
    const [openAdmirationDialog, setOpenAdmirationDialog] = useState(false)
    const [popUpType, setPopUpType] = useState(FeedsEnum.admirationDialog)

    const [activeAudioIndex, setActiveAudioIndex] = useState(null);

    const audioRefs = useRef([]);

    const { artistName, artistPost, postDetails, isFavouritePost, postLocation, isAdmired } = viewPosts;

    const actionDispatch = ((dispatch: any) => ({
        setHomeState: (data: any) => dispatch(HomeRedux.actions.setHomeState(data)),
    }))

    const { setHomeState } = actionDispatch(useDispatch());

    useEffect(() => {
        setViewPosts(location?.state?.mediaData)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        let audioCount = 0;
        location?.state?.mediaData?.artistPost?.forEach((item) => {
            if (item.postType === 'audio') {
                audioCount = audioCount + 1;
            }
        })

        audioRefs.current = audioRefs.current.slice(0, audioCount + 1);
    }, [viewPosts]);

    const handleCloseDialog = () => {
        setIsDialogOpened(false)
    }

    const handleFavouriteIcon = () => {
        const viewPostsData = { ...viewPosts, isFavouritePost: !isFavouritePost }
        setViewPosts(viewPostsData)
    }

    const handleAdmireIcon = () => {
        const viewPostsData = { ...viewPosts, isAdmired: !isAdmired }
        setViewPosts(viewPostsData)
    }

    const handleCloseAdmirationDialog = () => {
        setOpenAdmirationDialog(false)
    }

    const handleClickOnSharePost = () => {
        setPopUpType(FeedsEnum.commentDialog)
        setOpenAdmirationDialog(true)
    }

    const handlePlayPause = (index, data) => {

        let postDetails = {}
        if (activeAudioIndex === index) {
            let updatedMediaContent = []
            if (audioRefs.current[index]?.ended === true) {
                audioRefs.current[index].play();
                setActiveAudioIndex(null);
                updatedMediaContent = viewPosts?.artistPost?.map((mediaContent, i) => {
                    if (i === index) {
                        return {
                            ...mediaContent,
                            isPlaying: true
                        }
                    } else {
                        return {
                            ...mediaContent,
                            isPlaying: false
                        }
                    }
                })
            } else {
                updatedMediaContent = viewPosts?.artistPost?.map((mediaContent, i) => {
                    if (i === index) {
                        return {
                            ...mediaContent,
                            isPlaying: false
                        }
                    } else {
                        return {
                            ...mediaContent,
                            isPlaying: false
                        }
                    }
                })

                audioRefs.current[index].pause();
                setActiveAudioIndex(null);
            }
            postDetails = { ...viewPosts, artistPost: updatedMediaContent }
        } else {
            if (activeAudioIndex !== null) {
                audioRefs.current[activeAudioIndex].pause();
            }
            audioRefs.current[index].play();
            setActiveAudioIndex(index);

            const updatedMediaContent = viewPosts?.artistPost?.map((mediaContent, i) => {
                if (i === index) {
                    return {
                        ...mediaContent,
                        isPlaying: true
                    }
                } else {
                    return {
                        ...mediaContent,
                        isPlaying: false
                    }
                }
            })

            postDetails = { ...viewPosts, artistPost: updatedMediaContent }

        }
        setViewPosts(postDetails)
    }

    const handleUnMute = (index: number, data: any) => {

        const locationIndex = location?.state?.mediaIndex;

        const viewPostData = { ...viewPosts }
        viewPostData.artistPost = viewPostData?.artistPost?.map((item, itemIndex) => {
            if (itemIndex == index) {
                return {
                    ...item, isMute: false
                }
            } else {
                return item
            }
        })


        const homeData = [...homeState?.mediaContent]
        homeData[locationIndex] = { ...homeData[locationIndex], artistPost: viewPostData.artistPost }
        setHomeState({ key: 'mediaContent', value: homeData })
        setViewPosts(viewPostData)
    }

    const handleMute = (index: number, data: any) => {

        const locationIndex = location?.state?.mediaIndex;

        const viewPostData = { ...viewPosts }
        viewPostData.artistPost = viewPostData?.artistPost?.map((item, itemIndex) => {
            if (itemIndex == index) {
                return {
                    ...item, isMute: true
                }
            } else {
                return item
            }
        })

        const homeData = [...homeState?.mediaContent]
        homeData[locationIndex] = { ...homeData[locationIndex], artistPost: viewPostData.artistPost }
        setHomeState({ key: 'mediaContent', value: homeData })
        setViewPosts(viewPostData)
    }


    const renderSharePostScreenView = () => {
        return (
            <div className={styles['share-post-profile-and-text-area']}>
                <img alt='profile-image' className={styles['share-post-profile-image']} src={ImageAssets.ic_artist_image} />
                <textarea cols={50} placeholder={strings.writeMessage} className={styles['write-message-text-field']} />
            </div>
        )
    }

    return (
        <React.Fragment>
            <div>
                {<CommonDialog open={isDialogOpened} title={'Comments'} onClose={handleCloseDialog} >
                    <CommentScreen />
                </CommonDialog>}
            </div>
            <div>
                {<CommonDialog open={openAdmirationDialog} title={popUpType === FeedsEnum.admirationDialog ? constants.admirations : renderSharePostScreenView()} onClose={handleCloseAdmirationDialog} >
                    <AdmirationsScreen popUpType={popUpType} />
                </CommonDialog>}
            </div>
            <Grid container className={styles['view-post-container']}>

                <Grid container className={styles['view-post-sub-container']}>

                    <Grid item xs={0.6} sm={0.6} md={0.5} lg={0.5} xl={0.6} sx={{ p: '15px', display: { xs: 'none', sn: 'none', md: 'block' } }} >
                        <NavLink to={routesNames.home} style={{ textDecoration: 'none' }}>
                            <ArrowBackIosNewIcon className={styles['previous-button-web']} />
                        </NavLink>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6.3} xl={6.5} className={styles['post-main-container']}>

                        <div className={styles['profile-details']}>
                            <ArrowBackIosNewIcon className={styles['previous-button-mobile']} onClick={() => navigate('/home')} />
                            <img alt='artist-post' className={styles['artist-profile-image']} src={ImageAssets.ic_artist_image} />
                            <span className={styles['name']} > {artistName} </span>
                        </div>

                        {postLocation !== '' &&
                            <div className={styles['post-location-container']} >
                                <span className={styles['post-location']} > {postLocation} </span>
                            </div>
                        }

                        {postDetails !== '' &&
                            <div className={styles['post-description-container']}>
                                <span className={styles['post-description']} > {postDetails} </span>
                            </div>
                        }

                        <Grid item container className={styles['post-container']} alignItems={'center'}
                            sx={{ display: 'inline-block' }} >
                            {
                                artistPost.map((media: any, index: number) => {
                                    if (media.postType === MediaTypeEum.text) {
                                        return (
                                            <div key={index} className={!(artistPost?.length - 1 === index) && styles['common-border']}>
                                                <TextCard htmlValue={media.postData} />
                                            </div>
                                        )
                                    }
                                    if (media.postType === MediaTypeEum.image) {
                                        return (
                                            <div key={index} className={!(artistPost?.length - 1 === index) && styles['common-border']}>
                                                <img alt='artist-post' className={styles['artiast-posts']} src={media.postData} />
                                            </div>
                                        )
                                    }
                                    if (media.postType === MediaTypeEum.video) {
                                        return (
                                            <div key={index} className={!(artistPost?.length - 1 === index) && styles['common-border']}>
                                                <VideoPlayer videoUrl={'https://file-examples.com/storage/fe3f7d476663e91319de1d9/2017/04/file_example_MP4_480_1_5MG.mp4'} />
                                            </div>
                                        )
                                    }
                                    if (media.postType === MediaTypeEum.audio) {
                                        return (
                                            <div key={index} className={!(artistPost?.length - 1 === index) && styles['audio-container']}>
                                                <CustomAudioPlayer data={media} audioUrl={media.postData} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} />
                                            </div>
                                        )
                                    }
                                })
                            }

                        </Grid >

                        <div className={styles['interaction-icons']}>
                            <Grid container justifyContent={'space-between'}>
                                <Grid item xs={6} md={8} className={styles['post-interaction-icon-container']}>
                                    <img alt='admire' className={styles['admire-icons']} src={isAdmired ? ImageAssets.ic_active_admire : ImageAssets.ic_admire_inactive} onClick={handleAdmireIcon} />
                                    <Typography className={styles['constants']} onClick={handleAdmireIcon}>{constants.admire}</Typography>
                                    <img alt='comment' className={styles['comment-icons']} src={ImageAssets.ic_comment_inactive} onClick={() => setIsDialogOpened(true)} />
                                    <Typography className={styles['constants']} onClick={() => setIsDialogOpened(true)}>{constants.comments}</Typography>
                                </Grid>
                                <Grid item className={styles['post-interaction-icon-container']}>
                                    <Tooltip title={<div className={styles['tooltip-container']} >{isFavouritePost ? strings.addedToFavourite : strings.removedFromFavourite}</div>} arrow={true}>
                                        <img alt='favourite' className={styles['favourite-icons']} onClick={handleFavouriteIcon}
                                            src={isFavouritePost ? ImageAssets.ic_favourite_active : ImageAssets.ic_favourite_inactive} />
                                    </Tooltip>
                                    <img alt='share' className={styles['share-icons']} src={ImageAssets.ic_send_inactive} onClick={handleClickOnSharePost} />
                                </Grid>

                            </Grid>
                        </div>

                    </Grid>

                    <Grid item className={styles['comments-container']} lg={4.6} xl={4.6}>
                        <CommentScreen />
                    </Grid>
                </Grid>
            </Grid >
        </React.Fragment >
    )

}

export default ViewPost;