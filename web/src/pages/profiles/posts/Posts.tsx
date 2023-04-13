import MenuItemStyles from '@mantine/core/lib/Menu/MenuItem/MenuItem.styles'
import { Grid, Tooltip, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { constants, MediaTypeEum, strings } from '@sekeron/domain'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageAssets from 'src/assets'
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer'
import ImageSlider from 'src/components/common/image-slider/ImageSlider'
import MuiMenu from 'src/components/common/menu/Menu'
import TextCard from 'src/components/common/text-card/TextCard'
import VideoPlayer from 'src/components/common/video-player/VideoPlayer'
import routesNames from 'src/routes/RouteNames'
import styles from './Posts.module.css'

const Posts = ({ profileName, isFollowing, postData, handleProfileFollow, handleClick, handleClickOnFavourite, handleClickOnComment, handleClickOnAdmire, handleClickOnSharePost }: any) => {

    const feedsliderSettings: any = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpenMenu = Boolean(anchorEl);
    const navigate = useNavigate()

    const [isMoreClicked, setIsMoreClicked] = useState(false);

    const handleClose = (value: any, index: number) => {
        setAnchorEl(null)
        // setSelectedMenuItem(value)
    };

    const handleShowLessText = (text: any) => {
        const trimText = text.slice(0, 80)
        return `${trimText}...`
    }

    const handleClickOnMore = () => {
        setIsMoreClicked(!isMoreClicked)
    }

    const renderViewPostButton = (index: number, media: any) => {
        return (
            <div>
                <div className={styles['view-post-container']} onClick={() => navigate(routesNames.viewpost, { state: { mediaIndex: index, mediaData: media } })} >
                    <Typography>{constants.viewPost}</Typography>
                </div>
            </div>
        )
    }

    return (
        <div className={styles["container"]}>
            <Stack className={styles['header-container']}>
                <Stack>
                    <img alt='profile-image' className={styles['profile-image']} src={ImageAssets.ic_default_profile_image} />
                    <Typography className={styles['profile-name']} >{profileName}</Typography>
                    {!isFollowing && <a className={styles['follow-link']} onClick={() => handleProfileFollow()} >{constants.follwLink}</a>}
                </Stack>

                <img alt='more_icon' src={ImageAssets.ic_more}
                    id="menu-button"
                    aria-controls={isOpenMenu ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isOpenMenu ? 'true' : undefined}
                // onClick={(event: any) => handleClick(event, postData?.artistName, feedsIndex)}
                />
                <MuiMenu open={isOpenMenu} anchorEl={anchorEl} handleClose={handleClose} selectedmenuoption={'dark'}>
                    {/* {menuData?.map((menu: any, menuIndex: number) => {
                            return (
                                <div key={menuIndex} className={menuIndex == menuData.length - 1 ? '' : 'border-style'}>
                                    <MenuItemStyles className='menu-items' >
                                        <span onClick={() => handleClose(menu.value)}>
                                            {menu.menuName}
                                            {menuIndex == 2 && <span className='profile-name'> {profileName}</span>}
                                        </span>
                                    </MenuItemStyles>
                                </div>
                            )
                        })} */}
                </MuiMenu>
            </Stack>
            <div className={styles[""]}>
                <ImageSlider settings={feedsliderSettings} isShowBackground={true}>
                    {postData?.media.map((media: any, mediaIndex: number) => {
                        if (mediaIndex < 3) {
                            if (media.mediaType == MediaTypeEum.image) {
                                return (
                                    <div key={mediaIndex}>
                                        <img alt='artist-post' className={styles['post-image']} src={media?.publicUrl} />
                                        {renderViewPostButton(mediaIndex, postData)}
                                    </div>
                                )
                            } else if (media.mediaType == MediaTypeEum.video) {
                                return (
                                    <div key={mediaIndex} style={{ background: 'red', width: "90%", margin: 'auto' }} >
                                        {/* <VideoPlayer videoUrl={media?.mediaUrl} data={media} index={mediaIndex} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} /> */}
                                        {renderViewPostButton(mediaIndex, postData)}
                                    </div>
                                )
                            } else if (media.mediaType == MediaTypeEum.text) {
                                return (
                                    <div key={mediaIndex}>
                                        <TextCard htmlValue={' <div><span style="font-family: &quot;Salesforce Sans&quot;; font-size: 36px; color: rgb(0, 87, 102);"><em><u><strong>Punya</strong></u></em></span></div><div><span style="font-family: &quot;Salesforce Sans&quot;; font-size: 36px; color: rgb(0, 87, 102);"><span style="color: rgb(228, 247, 186);"><em><u><strong>punya--she is a very good girl.</strong></u></em></span></span></div>'} />
                                        {renderViewPostButton(mediaIndex, postData)}
                                    </div>
                                )
                            } else if (media.mediaType == MediaTypeEum.audio) {
                                return (
                                    <div key={mediaIndex}>
                                        {/* <CustomAudioPlayer data={media} audioUrl={media.postData} index={postDataIndex} audioRefs={audioRefs}
                                            handlePlayPause={handlePlayPause} handleMute={handleMute} handleUnMute={handleUnMute} /> */}
                                        {renderViewPostButton(mediaIndex, postData)}
                                    </div>
                                )
                            }
                        }
                    })}
                </ImageSlider>

                {postData.postTitle !== '' && <Typography>{postData.postTitle}</Typography>}
                {postData?.postDescription !== '' &&
                    <Typography className={styles['post-description']}>
                        {!isMoreClicked ? handleShowLessText(postData?.postDescription) : postData?.postDescription}
                        <span className={styles['more']} onClick={handleClickOnMore} >{isMoreClicked ? constants.showLess : constants.more}</span>
                    </Typography>
                }

                <Stack justifyContent={"space-between"}>
                    <Stack >
                        <Stack alignItems="center">
                            <img alt='admire' className={styles['icon']} src={postData.isAdmired ? ImageAssets.ic_active_admire : ImageAssets.ic_admire_inactive} />
                            <Typography className={styles['constants']} >{constants.admire}</Typography>
                        </Stack>
                        <Stack alignItems="center">
                            <img alt='comment' className={styles['icon']} src={ImageAssets.ic_comment_inactive} />
                            <Typography className={styles['constants']} >{constants.comments}</Typography>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Tooltip title={<div className={styles['tooltip-container']} >{postData.isFavouritePost ? strings.addedToFavourite : strings.removedFromFavourite}</div>} arrow={true} placement={'top'}>
                            <img alt='favourite' className={styles['icon']}
                                src={postData.isFavouritePost ? ImageAssets.ic_favourite_active : ImageAssets.ic_favourite_inactive} />
                        </Tooltip>
                        <img alt='share' className={styles['icon']} src={ImageAssets.ic_send_inactive} onClick={handleClickOnSharePost} />
                    </Stack>
                </Stack>

                <div className={styles['horizontal-divider']}></div>

                <Grid container className={styles['admiration-and-comments-container']} justifyContent={'space-between'} padding={'15px'}>
                    <Typography>{`${postData.noOfAdmirations} Admirations`}</Typography>
                    <Typography>{` View all ${postData.comments.length} Comments`}</Typography>
                </Grid>
            </div>
        </div >
    )
}

export default Posts