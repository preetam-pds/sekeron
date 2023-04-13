import { Grid, Stack, styled, Tooltip, Typography, } from '@mui/material'
import { constants, FeedsEnum, MediaTypeEum, strings } from '@sekeron/domain';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import ImageAssets from 'src/assets';
import ImageSlider from 'src/components/common/image-slider/ImageSlider';
import InterestBar from 'src/components/common/interest-bar/InterestBar';
import VideoPlayer from 'src/components/common/video-player/VideoPlayer';
import styles from './Feed.module.css'
import { useNavigate } from 'react-router-dom';
import TextCard from 'src/components/common/text-card/TextCard';
import CommonDialog from 'src/components/common/dailog/common-dialog/CommonDialog';
import AdmirationsScreen from '../admiration-screen/AdmirationsScreen';
import routesNames from 'src/routes/RouteNames';
import MuiMenu from 'src/components/common/menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { HomeRedux } from '@sekeron/domain/dist/redux/home-redux/HomeRedux';
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer';
import { EventsArtistJson } from 'src/core/json/HomePageJson';
import { imageAvatars } from 'src/core/json/EventJson';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';

interface IFeedProps {
    FeedJson: Array<any>
}

const Feeds = (feedProps: IFeedProps) => {

    const menuData = [
        {
            id: '1',
            menuName: 'Report Post',
            value: 'reportPost'
        },
        {
            id: '1',
            menuName: 'Share outside Sekeron',
            value: 'shareOutsideSekeron'
        },
        {
            id: '1',
            menuName: `Unfollow`,
            value: 'unfollow'
        },
    ]


    const feedsliderSettings: any = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
    }

    const eventSliderSettings: any = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
    }

    const navigate = useNavigate()

    const [previousFeedData, setPreviousFeedData] = useState([])
    const [isMoreClicked, setIsMoreClicked] = useState(false);
    const [indexOfChangedinterestBar, setIndexOfChangedinterestBar] = useState(null)
    const [undoCounter, setUndoCounter] = useState(5)
    const [isShowUndo, setIsShowUndo] = useState(false)
    const [openAdmirationDialog, setOpenAdmirationDialog] = useState(false)
    const [popUpType, setPopUpType] = useState(FeedsEnum.admirationDialog)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [profileName, setProfileName] = useState('')
    const [activeAudioIndex, setActiveAudioIndex] = useState(null);
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const audioRefs = useRef([]);
    const videoRefs = useRef([]);

    const isOpenMenu = Boolean(anchorEl);

    const homeState = useSelector((state: any) => state.HomeRedux);

    const actionDispatch = ((dispatch: any) => ({
        setHomeState: (data: any) => dispatch(HomeRedux.actions.setHomeState(data)),
    }))

    const { setHomeState } = actionDispatch(useDispatch())

    useEffect(() => {
        setPreviousFeedData(homeState.mediaContent)
    }, [])

    useEffect(() => {
        if (selectedMenuItem == 'unfollow') {
            let unfollowedData = [...homeState.mediaContent]
            unfollowedData[selectedMenuIndex] = { ...unfollowedData[selectedMenuIndex], isFollowing: false }
            setHomeState({ key: 'mediaContent', value: unfollowedData })
            setSelectedMenuItem(null)
        }
    }, [selectedMenuItem])

    useEffect(() => {
        if (undoCounter > 0) {
            const timer = setInterval(handleUndoCounter, 1000)
            return () => {
                clearTimeout(timer)
            }
        }

        if (undoCounter === 0) {
            setIsShowUndo(false)
            setPreviousFeedData(homeState.mediaContent)
            setIndexOfChangedinterestBar(null)
        }
    }, [undoCounter])

    useEffect(() => {
        audioRefs.current = audioRefs.current.slice(0, homeState.mediaContent.length);
    }, [homeState.mediaContent]);

    const handleUndoCounter = () => {
        if (undoCounter > 0 && undoCounter <= 5) {
            setUndoCounter(undoCounter - 1)
        }
    }

    const handleInterestBar = (event: any, index: number) => {
        setIndexOfChangedinterestBar(index)
        setIsShowUndo(true)
        setUndoCounter(5)
        const feedBarData = homeState.mediaContent?.map((feeds: any, feedsindex: number) => {
            if (feedsindex == index) {
                return {
                    ...feeds,
                    interestBar: event.target.value
                }
            } return feeds
        })
        setHomeState({ key: 'mediaContent', value: feedBarData })
    }

    const handleClickOnFavourite = (index: number) => {
        const clickeFavouriteIcon = homeState.mediaContent?.map((feeds: any, feedsindex: number) => {
            if (feedsindex == index) {
                return {
                    ...feeds,
                    isFavouritePost: !feeds.isFavouritePost
                }
            } else {
                return feeds
            }
        })
        setHomeState({ key: 'mediaContent', value: clickeFavouriteIcon })

    }

    const handleShowLessText = (text: any) => {
        const trimText = text.slice(0, 80)
        return `${trimText}...`
    }

    const handleClickOnMore = () => {
        setIsMoreClicked(!isMoreClicked)
    }

    const handleUndo = () => {
        setUndoCounter(5)
        setIndexOfChangedinterestBar(null)
        setHomeState({ key: 'mediaContent', value: previousFeedData })
    }

    const handleClickOnComment = (feed: any, index: number) => {
        navigate(routesNames.viewpost, { state: { mediaIndex: index, mediaData: feed } })
    }

    const handleClickOnNoOfAdmirations = (feed: any, index: number) => {
        setOpenAdmirationDialog(true)
        setPopUpType(FeedsEnum.admirationDialog)
    }

    const handleCloseAdmirationDialog = () => {
        setOpenAdmirationDialog(false)
    }

    const handleClickOnSharePost = () => {
        setPopUpType(FeedsEnum.commentDialog)
        setOpenAdmirationDialog(true)
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>, name, feedsIndex) => {
        setProfileName(name)
        setAnchorEl(event.currentTarget);
        setSelectedMenuIndex(feedsIndex)
    };

    const handleClose = (value: any, index: number) => {
        setAnchorEl(null)
        setSelectedMenuItem(value)
    };

    const handleClickOnAdmire = (index: number) => {
        const clickeAdmireIcon = homeState.mediaContent?.map((feeds: any, feedsindex: number) => {
            if (feedsindex == index) {
                return {
                    ...feeds,
                    isAdmired: !feeds.isAdmired
                }
            } else {
                return feeds
            }
        })
        setHomeState({ key: 'mediaContent', value: clickeAdmireIcon })
    }

    const handleProfileFollow = (index: number) => {
        const clickOnFollow = homeState?.mediaContent?.map((feeds: any, feedsindex: number) => {
            if (feedsindex == index) {
                return {
                    ...feeds,
                    isFollowing: true
                }
            } else {
                return feeds
            }
        })
        setHomeState({ key: 'mediaContent', value: clickOnFollow })
    }

    const renderViewPostButton = (index: number, media: any) => {
        return (
            <Grid className={styles['view-post-container']} container onClick={() => navigate(routesNames.viewpost, { state: { mediaIndex: index, mediaData: media } })} >
                <span className={styles['view-post']} >{constants.viewPost}</span>
            </Grid>
        )
    }

    const renderSharePostScreenView = () => {
        return (
            <div className={styles['share-post-profile-and-text-area']}>
                <img alt='profile-image' className={styles['share-post-profile-image']} src={ImageAssets.ic_artist_image} />
                <textarea cols={50} placeholder={strings.writeMessage} className={styles['write-message-text-field']} />
            </div>
        )
    }

    const MenuItemStyles = styled('div') <any>`
            font-family: "Comfortaa-Light";
            color: var(--nonary-grey-color);
            font-size: 2rem;
            text-align: center;
            padding: 15px;
    `

    const handlePlayPause = (index, data) => {

        let findIndexOfSelectdAudio;
        homeState?.mediaContent?.forEach((item, index) => {
            item?.artistPost?.forEach((audio, audioIndex) => {
                if (audio == data) {
                    findIndexOfSelectdAudio = audioIndex
                }
            })
        })

        let postDetails = {}
        if (activeAudioIndex === index) {
            let updatedMediaContent = [];
            if (audioRefs.current[index]?.ended === true) {
                audioRefs.current[index].play();
                setActiveAudioIndex(null);
                updatedMediaContent = homeState?.mediaContent.map((mediaContent, i) => {
                    if (i === index) {
                        const artistPost = mediaContent.artistPost?.map((item, itemIndex) => itemIndex == findIndexOfSelectdAudio ? { ...item, isPlaying: true } : { ...item, isPlaying: false })
                        return { ...mediaContent, artistPost: artistPost }
                    } else {
                        const artistPost = mediaContent.artistPost?.map((item, itemIndex) => itemIndex == findIndexOfSelectdAudio ? { ...item, isPlaying: false } : { ...item, isPlaying: false })
                        return { ...mediaContent, artistPost: artistPost }
                    }
                })
            } else {
                updatedMediaContent = homeState?.mediaContent.map((mediaContent, i) => {
                    if (i === index) {
                        const artistPost = mediaContent.artistPost?.map((item, itemIndex) => itemIndex == findIndexOfSelectdAudio ? { ...item, isPlaying: false } : { ...item, isPlaying: false })
                        return { ...mediaContent, artistPost: artistPost }
                    } else {
                        return mediaContent
                    }
                })

                audioRefs.current[index].pause();
                setActiveAudioIndex(null);
            }
            postDetails = [...updatedMediaContent]
        } else {
            if (activeAudioIndex !== null) {
                audioRefs.current[activeAudioIndex].pause();
            }
            audioRefs.current[index].play();
            setActiveAudioIndex(index);

            const updatedMediaContent = homeState?.mediaContent.map((mediaContent, i) => {
                if (i === index) {
                    const artistPost = mediaContent.artistPost?.map((item, itemIndex) => itemIndex == findIndexOfSelectdAudio ? { ...item, isPlaying: true } : { ...item, isPlaying: false })
                    return { ...mediaContent, artistPost: artistPost }
                } else {
                    const artistPost = mediaContent.artistPost?.map((item, itemIndex) => itemIndex == findIndexOfSelectdAudio ? { ...item, isPlaying: false } : { ...item, isPlaying: false })
                    return { ...mediaContent, artistPost: artistPost }
                }
            })
            postDetails = [...updatedMediaContent]
        }
        setHomeState({ key: 'mediaContent', value: postDetails })
    }

    const handleUnMute = (index: number, data: any) => {
        let findIndexOfAudio;
        homeState?.mediaContent[index]?.artistPost?.forEach((audio, audioIndex) => {
            if (audio == data) {
                findIndexOfAudio = audioIndex
            }
        })

        const homeData = [...homeState?.mediaContent];

        const artistPost = homeData[index].artistPost?.map((item, itemIndex) => {
            if (findIndexOfAudio == itemIndex) {
                return {
                    ...item,
                    isMute: false
                }
            } else {
                return item
            }
        })

        homeData[index] = { ...homeData[index], artistPost: artistPost }
        setHomeState({ key: 'mediaContent', value: homeData })
    }

    const handleMute = (index: number, data: any) => {
        let findIndexOfAudio;
        homeState?.mediaContent[index]?.artistPost?.forEach((audio, audioIndex) => {
            if (audio == data) {
                findIndexOfAudio = audioIndex
            }
        })

        const homeData = [...homeState?.mediaContent];

        const artistPost = homeData[index].artistPost?.map((item, itemIndex) => {
            if (findIndexOfAudio == itemIndex) {
                return {
                    ...item,
                    isMute: true
                }
            } else {
                return item
            }
        })

        homeData[index] = { ...homeData[index], artistPost: artistPost }
        setHomeState({ key: 'mediaContent', value: homeData })
    }

    const handlePlayPauseVideo = () => {
    }

    const handleClickOnSeeAllEvents = () => {
        navigate(routesNames.events)
    }

    return (
        <Fragment>
            <div>
                {<CommonDialog open={openAdmirationDialog} title={popUpType == FeedsEnum.admirationDialog ? constants.admirations : renderSharePostScreenView()} onClose={handleCloseAdmirationDialog} >
                    <AdmirationsScreen popUpType={popUpType} />
                </CommonDialog>}
            </div>

            {homeState?.mediaContent?.map((feeds: any, feedsIndex: number) => {
                return (
                    <div key={feedsIndex} >
                        <Grid container key={feedsIndex} className={styles['home-sub-container']} >

                            {indexOfChangedinterestBar == feedsIndex &&
                                <div className={indexOfChangedinterestBar == feedsIndex ? styles['home-sub-container-overlay'] : ''}>
                                    <span className={styles['show-overlay-text']} >
                                        {feeds?.interestBar < 50 ? 'Show less posts like this' : 'Show more posts like this'}
                                    </span>
                                </div>
                            }

                            <Grid container className={styles['artist-container']} flexDirection={'row'} justifyContent={'space-between'}>
                                <Grid item xs={9.5} className={styles['profile-details']}>
                                    <img alt='profile-image' className={styles['profile-image']} src={ImageAssets.ic_indian_flag} />
                                    <Typography className={styles['profile-name']} >{feeds?.artistName}</Typography>
                                    {!feeds.isFollowing && <a className={styles['follow-link']} onClick={() => handleProfileFollow(feedsIndex)} >{constants.follwLink}</a>}
                                </Grid>
                                <Grid item xs={1} className={styles['ic_more']} >
                                    <img alt='more_icon' src={ImageAssets.ic_more}
                                        id="menu-button"
                                        aria-controls={isOpenMenu ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={isOpenMenu ? 'true' : undefined}
                                        onClick={(event: any) => handleClick(event, feeds?.artistName, feedsIndex)}
                                    />
                                    <MuiMenu open={isOpenMenu} anchorEl={anchorEl} handleClose={handleClose} selectedmenuoption={'dark'}>
                                        {menuData?.map((menu: any, menuIndex: number) => {
                                            return (
                                                <div key={menuIndex} className={menuIndex == menuData.length - 1 ? '' : 'border-style'}>
                                                    <MenuItemStyles className='menu-items' >
                                                        <span onClick={() => handleClose(menu.value, feedsIndex)}>
                                                            {menu.menuName}
                                                            {menuIndex == 2 && <span className='profile-name'> {profileName}</span>}
                                                        </span>
                                                    </MenuItemStyles>
                                                </div>
                                            )
                                        })}
                                    </MuiMenu>
                                </Grid>
                            </Grid>

                            <Grid container flexDirection={'column'}>
                                <Grid item container style={{ display: 'inline-block' }}>

                                    <ImageSlider settings={feedsliderSettings} isShowBackground={true}>
                                        {feeds?.artistPost?.map((media: any, mediaIndex: number) => {
                                            if (mediaIndex < 3) {
                                                if (media.postType == MediaTypeEum.image) {
                                                    return (
                                                        <div key={mediaIndex}>
                                                            <img alt='artist-post' className={styles['post-image']} src={media?.postData} />
                                                            {renderViewPostButton(feedsIndex, feeds)}
                                                        </div>
                                                    )
                                                } else if (media.mediaType == MediaTypeEum.video) {
                                                    return (
                                                        <div key={mediaIndex} style={{ background: 'red', width: "90%", margin: 'auto' }} >
                                                            <VideoPlayer videoUrl={media?.mediaUrl} data={media} index={mediaIndex} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
                                                            {renderViewPostButton(feedsIndex, feeds)}
                                                        </div>
                                                    )
                                                } else if (media.postType == MediaTypeEum.text) {
                                                    return (
                                                        <div key={mediaIndex}>
                                                            <TextCard htmlValue={' <div><span style="font-family: &quot;Salesforce Sans&quot;; font-size: 36px; color: rgb(0, 87, 102);"><em><u><strong>Punya</strong></u></em></span></div><div><span style="font-family: &quot;Salesforce Sans&quot;; font-size: 36px; color: rgb(0, 87, 102);"><span style="color: rgb(228, 247, 186);"><em><u><strong>punya--she is a very good girl.</strong></u></em></span></span></div>'} />
                                                            {renderViewPostButton(feedsIndex, feeds)}
                                                        </div>
                                                    )
                                                } else if (media.postType == MediaTypeEum.audio) {
                                                    return (
                                                        <div key={mediaIndex}>
                                                            <CustomAudioPlayer data={media} audioUrl={media.postData} index={feedsIndex} audioRefs={audioRefs}
                                                                handlePlayPause={handlePlayPause} handleMute={handleMute} handleUnMute={handleUnMute} />
                                                            {renderViewPostButton(feedsIndex, feeds)}
                                                        </div>
                                                    )
                                                }
                                            }
                                        })}
                                    </ImageSlider>

                                </Grid>

                                <Typography className={styles['post-location']}>{feeds?.postLocation}</Typography>

                                {feeds?.postDetails !== '' &&
                                    <Typography className={styles['post-description']}>
                                        {!isMoreClicked ? handleShowLessText(feeds?.postDetails) : feeds?.postDetails}
                                        <span className={styles['more']} onClick={handleClickOnMore} >{isMoreClicked ? constants.showLess : constants.more}</span>
                                    </Typography>
                                }

                                <Grid container flexDirection={'row'} justifyContent={'space-between'}>

                                    <Grid item xs={8} md={8} className={styles['post-interaction-icon-container']}>
                                        <img alt='admire' className={styles['post-admire-icons']} src={feeds.isAdmired ? ImageAssets.ic_active_admire : ImageAssets.ic_admire_inactive} onClick={() => handleClickOnAdmire(feedsIndex)} />
                                        <Typography className={styles['constants']} onClick={() => handleClickOnAdmire(feedsIndex)}>{constants.admire}</Typography>
                                        <img alt='comment' className={styles['post-comment-icon']} src={ImageAssets.ic_comment_inactive} onClick={() => handleClickOnComment(feeds, feedsIndex)} />
                                        <Typography className={styles['constants']} onClick={() => handleClickOnComment(feeds, feedsIndex)}>{constants.comments}</Typography>
                                    </Grid>

                                    <Grid item className={styles['post-interaction-icon-container']}>
                                        <Tooltip title={<div className={styles['tooltip-container']} >{feeds.isFavouritePost ? strings.addedToFavourite : strings.removedFromFavourite}</div>} arrow={true} placement={'top'}>
                                            <img alt='favourite' className={styles['post-favourite-icon']} onClick={() => handleClickOnFavourite(feedsIndex)}
                                                src={feeds.isFavouritePost ? ImageAssets.ic_favourite_active : ImageAssets.ic_favourite_inactive} />
                                        </Tooltip>
                                        <img alt='share' className={styles['post-share-icon']} src={ImageAssets.ic_send_inactive} onClick={handleClickOnSharePost} />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <div className={styles['horizontal-divider']}></div>

                            <Grid container className={styles['admiration-and-comments-container']} justifyContent={'space-between'} padding={'15px'}>
                                <Typography onClick={() => handleClickOnNoOfAdmirations(feeds, feedsIndex)}>{`${feeds.noOfAdmirations} Admirations`}</Typography>
                                <Typography>{` View all ${feeds?.noOfComments} Comments`}</Typography>
                            </Grid>

                            <div className={styles['horizontal-divider']}></div>

                            {!feeds.isFollowing &&
                                < Grid container className={styles['interest-bar-container']}>
                                    <InterestBar value={feeds?.interestBar} handleinterestbar={(event) => handleInterestBar(event, feedsIndex)} />
                                </Grid>
                            }

                            {
                                (indexOfChangedinterestBar == feedsIndex) && isShowUndo &&
                                <Grid container className={styles['undo-container']} justifyContent={'center'} onClick={handleUndo} >
                                    {`Undo(${undoCounter})`}
                                </Grid>
                            }
                        </Grid>
                        {feedsIndex == 2 &&
                            <Grid container flexDirection={'column'} sx={{ mb: '40px', display: { xs: "block", sm: "block", md: "none", lg: 'none', xl: 'none' } }} >
                                <Grid item container className={styles['events-header-container']} justifyContent={'space-between'}>
                                    <Grid item className={styles['events-text']} >{strings.upComingEvents}</Grid>
                                    <Grid item className={styles['see-all-text']} onClick={handleClickOnSeeAllEvents} >{constants.seeAll}</Grid>
                                </Grid>

                                <Grid item container style={{ display: 'inline-block' }}>
                                    <ImageSlider settings={eventSliderSettings} isShowBackground={true}>
                                        {EventsArtistJson?.map((event: any, mediaIndex: number) => {
                                            return (
                                                <div key={mediaIndex}>
                                                    <Grid container gap={2} >
                                                        <Grid item xs={11.5} sm={11.5} className={styles['events-container']}>
                                                            <img src={event?.artistImage} className={styles['events-image']} />
                                                            <Stack justifyContent={'space-between'} flexDirection={{ xs: 'column', sm: 'row' }} sx={{ padding: '10px' }} >
                                                                <span className={styles['events-location-mobile']} >dedededede</span>
                                                                <span className={styles['events-date-mobile']}>09 Jun</span>
                                                            </Stack>
                                                            <Stack sx={{ padding: "0px 15px" }} >
                                                                <CustomAvatar numberOfAvatars={4} variant={'circular'} imageAvatars={imageAvatars}
                                                                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', color: 'red' }}
                                                                    className={styles['avatar-font-color']}
                                                                />
                                                            </Stack>
                                                            <div className={styles['screen-tag']} >
                                                                <div className={styles["event-type"]}>
                                                                    <span >{event?.eventType}</span>
                                                                </div>
                                                            </div>                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            )
                                        })}
                                    </ImageSlider>
                                </Grid>
                            </Grid>
                        }
                        {feedsIndex == 4 && <Grid container flexDirection={'column'} sx={{ mb: '40px', display: { xs: "block", sm: "block", md: "none", lg: 'none', xl: 'none' } }} >
                            <Grid item container className={styles['events-header-container']} justifyContent={'space-between'}>
                                <Grid item className={styles['events-text']} >{strings.trendingProjects}</Grid>
                                <Grid item className={styles['see-all-text']} onClick={handleClickOnSeeAllEvents} >{constants.seeAll}</Grid>
                            </Grid>

                            <Grid item container style={{ display: 'inline-block' }}>
                                <ImageSlider settings={eventSliderSettings} isShowBackground={true}>
                                    {EventsArtistJson?.map((event: any, mediaIndex: number) => {
                                        return (
                                            <div key={mediaIndex}>
                                                <Grid container gap={2} >
                                                    <Grid item xs={11.5} sm={11.5} className={styles['projects-container']}>
                                                        <img src={event?.artistImage} className={styles['projects-image']} />
                                                        <Stack justifyContent={'space-between'} flexDirection={{ xs: 'column', sm: 'row' }} sx={{ padding: '10px' }} >
                                                            <span className={styles['project-location-mobile']}>dedededede</span>
                                                            <span className={styles['project-date-mobile']}>09 Jun</span>
                                                        </Stack>
                                                        <Stack alignItems={'center'} flexDirection={{ xs: 'column', sm: 'row' }} gap={1} sx={{ padding: '0px 10px' }} >
                                                            <img src={event?.artistImage} alt={event?.artistImage} className={styles['project-profile-mobile']} />
                                                            <span className={styles['project-profile-name-mobile']}>dedededede</span>
                                                            <span className={styles['project-profile-follow-mobile']}>{strings.follow}</span>
                                                        </Stack>
                                                        <Stack sx={{ padding: "0px 15px" }} >
                                                            <img src={''} />
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        )
                                    })}
                                </ImageSlider>
                            </Grid>
                        </Grid>}
                    </div>
                )
            })}
        </Fragment >
    )
}

export default Feeds