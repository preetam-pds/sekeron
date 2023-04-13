import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { strings, MediaTypeEum, OwnershiptypeEnumUtils, DailogBoxTypeEnum, CreateProjectRedux } from '@sekeron/domain'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageAssets from 'src/assets'
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer'
import VideoPlayer from 'src/components/common/video-player/VideoPlayer'
import ControlledAccordions from '../mui-accordian/MuiAccordian'
import styles from './PreviewProject.module.css'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar'
import { GradientButton, MuiButton } from 'src/components/common/button/MuiButton'
import routesNames from 'src/routes/RouteNames'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useNavigate } from 'react-router-dom'
import MuiConfirmationDailog from 'src/components/common/dailog/confirmation-dailog/MuiConfirmationDailog'
import CustomSuccessDailog from 'src/components/common/dailog/success-dailog/MuiSuccessDailog'
import moment from 'moment'

const PreviewProject = () => {

    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
    // const createPostState = useSelector((state: any) => state.CreatePostRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
    }))

    const [isNextButtonClicked, setIsNextButtonClicked] = useState(false)
    const [isUserAgreedToSendNotification, setIsUserAgreedToSendNotification] = useState(false)
    const [activeAudioIndex, setActiveAudioIndex] = useState(null);

    const audioRefs = useRef([]);
    const navigate = useNavigate()
    const { setCreateProjectState } = actionDispatch(useDispatch())


    useEffect(() => {
        audioRefs.current = audioRefs.current.slice(0, createProjectState.projectDetails.mediaContent.length);
    }, [createProjectState.projectDetails.mediaContent]);

    const handleCloseDailog = () => {
        setIsNextButtonClicked(false)
    }

    const handleConfirmClick = () => {
        setIsUserAgreedToSendNotification(true)
        setTimeout(() => {
            handleSuccessDailogClose()
        }, 5000)
    }

    const handleSuccessDailogClose = () => {
        setIsUserAgreedToSendNotification(false)
        navigate(routesNames.home)
    }

    const handlePlayPause = (index) => {
        let projectDetails = {}
        if (activeAudioIndex === index) {
            let updatedMediaContent = []
            if (audioRefs.current[index]?.ended === true) {

                audioRefs.current[index].play();
                setActiveAudioIndex(null);

                updatedMediaContent = createProjectState.projectDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                    ...mediaContent,
                    isPlaying: true
                } : { ...mediaContent, isPlaying: false })

            } else {

                updatedMediaContent = createProjectState.projectDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                    ...mediaContent,
                    isPlaying: false
                } : { ...mediaContent, isPlaying: false })

                audioRefs.current[index].pause();
                setActiveAudioIndex(null);

            }
            projectDetails = {
                ...createProjectState.projectDetails,
                mediaContent: [
                    ...updatedMediaContent,
                ]
            }

        } else {
            if (activeAudioIndex !== null) {
                audioRefs.current[activeAudioIndex].pause();
            }
            audioRefs.current[index].play();
            setActiveAudioIndex(index);

            const updatedMediaContent = createProjectState.projectDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                ...mediaContent,
                isPlaying: true
            } : { ...mediaContent, isPlaying: false })

            projectDetails = {
                ...createProjectState.projectDetails,
                mediaContent: [
                    ...updatedMediaContent,
                ]
            }
        }
        setCreateProjectState({
            key: "projectDetails", value: projectDetails
        })
    };

    const handleUnMute = (index) => {
        const updatedMediaContent = createProjectState.projectDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isMute: false
        } : { ...mediaContent })

        const projectDetails = {
            ...createProjectState.projectDetails,
            mediaContent: [
                ...updatedMediaContent,
            ]
        }

        setCreateProjectState({
            key: "projectDetails", value: projectDetails
        })

    }

    const handleMute = (index) => {
        const updatedMediaContent = createProjectState.projectDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isMute: true
        } : { ...mediaContent })

        const projectDetails = {
            ...createProjectState.projectDetails,
            mediaContent: [
                ...updatedMediaContent,
            ]
        }

        setCreateProjectState({
            key: "projectDetails", value: projectDetails
        })
    }

    const createMarkup = (item) => {
        return { __html: item };
    }

    const UploadedMedia = (item: any, index: number) => {
        if (item.mediaType === MediaTypeEum.image) {
            return (
                <img
                    src={item.publicUrl}
                    srcSet={item.publicUrl}
                    alt='title'
                    loading='lazy'
                    className={styles["uploaded-image"]}
                />
            )
        }
        else if (item.mediaType === MediaTypeEum.voice) {
            return (
                <CustomAudioPlayer data={item} audioUrl={item.publicUrl} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
            )
        }
        else if (item.mediaType === MediaTypeEum.video) {
            return (
                <VideoPlayer isThumbnail={true} videoUrl={item.publicUrl} data={item} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
            )
        }
        else if (item.mediaType === MediaTypeEum.text) {
            return (
                <div dangerouslySetInnerHTML={createMarkup(item.publicUrl)} />
            )
        }
    }

    return (
        <>
            {isUserAgreedToSendNotification ?
                <CustomSuccessDailog
                    varient={DailogBoxTypeEnum.successDailog}
                    open={isUserAgreedToSendNotification}
                    handleDailogClose={handleSuccessDailogClose}
                    eventSuccessIcon={false}
                >
                    <Typography variant='h2' className="success-message">
                        {strings.projectPublishedSuccefully}
                    </Typography>
                </CustomSuccessDailog>
                : null
            }
            {isNextButtonClicked ?
                <MuiConfirmationDailog fisrtButtonLabel={strings.no} secondButtonLabel={strings.yes} isOpen={isNextButtonClicked} handleCancel={handleCloseDailog} handleSave={handleConfirmClick}>
                    <div>
                        <Typography className={styles["confirmation-message"]}>{strings.thisWillSendInvitesToAllArtists}</Typography>
                    </div>
                </MuiConfirmationDailog> : null}

            <div className={styles["preview-project"]}>
                <Stack alignItems={"center"} className={styles["mobile-header-container"]}>
                    <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(routesNames.createProject)} />
                    <Typography className={styles["preview-project-header"]}>{strings.createProject}</Typography>
                </Stack>
                <Stack className={styles["preview-project-container"]} direction="column" rowGap={2}>
                    <Stack direction="column" rowGap={2} className={styles["info-container"]}>
                        <Stack justifyContent={"space-between"}>
                            <Typography className={styles["header"]}>Mute The Saint</Typography>
                            <Stack alignItems={"center"} columnGap={1}
                                sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
                                <img src={ImageAssets.ic_datepicker} className={styles["date-picker"]} />
                                <Typography className={styles["project-date"]}>
                                    {moment(createProjectState.projectDetails.basicInfo?.startDate).format('DD/MM/YYYY')}-{moment(createProjectState.projectDetails.basicInfo?.endDate).format('DD/MM/YYYY')}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack columnGap={2}>
                            <img src={ImageAssets.ic_friend_two} style={{ width: "100px", height: "100px" }} />
                            <Stack direction="column" rowGap={0.5}>
                                <Typography className={styles["project-id"]}>{strings.projectId}<span> #drrtff</span></Typography>
                                <Typography className={styles["project-title"]}>{createProjectState.projectDetails.basicInfo?.projectName}</Typography>
                                <Stack alignItems={"center"} columnGap={1} sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
                                    <img src={ImageAssets.ic_datepicker} className={styles["date-picker"]} />
                                    <Typography className={styles["project-date"]}>
                                        {moment(createProjectState.projectDetails.basicInfo?.startDate).format('DD/MM/YYYY')}-{moment(createProjectState.projectDetails.basicInfo?.endDate).format('DD/MM/YYYY')}
                                    </Typography>
                                </Stack>
                                <Stack className={styles["artists-card"]} alignItems="center" columnGap={1} >
                                    <CustomAvatar
                                        numberOfAvatars={1}
                                        imageAvatars={[{ id: 1, imageUrl: ImageAssets.ic_friend_two }]}
                                        variant={'circular'}
                                        sx={{ width: 25, height: 25 }} />
                                    <Stack sx={{ position: "relative" }} alignItems="center" columnGap={2}>
                                        <Typography className={styles["artist-name"]}>Punya</Typography>
                                        <Stack>
                                            <StarRateRoundedIcon className={styles["ratings-icon"]} />
                                            <Typography className={styles["artist-ratings"]}>4.8</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction="column" rowGap={2} className={styles["project-info-container"]}>
                        {createProjectState.projectDetails.basicInfo.description ?
                            <Stack direction="column">
                                <Typography className={styles["description-header"]}>{strings.description}</Typography>
                                <Typography className={styles["description"]}>{createProjectState.projectDetails.basicInfo.description}</Typography>
                            </Stack>
                            :
                            null}
                        <Stack direction="column">
                            <Typography className={styles["ownership-type"]}>{strings.projectType} <span>online</span></Typography>
                            <Typography className={styles["ownership-type"]}>{strings.ownerShipType}: <span>{OwnershiptypeEnumUtils.getOwnershipEnumText(createProjectState.projectDetails.basicInfo.ownershipType)}</span></Typography>
                        </Stack>
                        <div className={styles["posts-container"]} style={{ backgroundColor: "" }}>
                            <Typography className={styles["gallery-header"]}>{strings.mediaGallery}</Typography>
                            <ImageList className={styles["selected-media-container"]} rowHeight={200}>
                                <ImageListItem sx={{ display: 'flex', flexDirection: 'row', height: "250px" }}>
                                    {createProjectState.projectDetails.mediaContent.map((mediaData, index) => {
                                        return (
                                            <Box className={mediaData.mediaType === MediaTypeEum.voice ? styles["audio-player-container"] : styles["media-player-container"]}>
                                                {UploadedMedia(mediaData, index)}
                                            </Box>
                                        )
                                    })}
                                </ImageListItem>
                            </ImageList>
                        </div>
                        <div>
                            <Typography className={styles["gallery-header"]}>{strings.artistType}</Typography>
                            <ControlledAccordions />
                        </div>
                    </Stack>
                    <Stack className={styles["button-container"]} rowGap={2} columnGap={2} sx={{ flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" } }} >
                        <MuiButton className={styles["publish-post"]} onClick={() => setIsNextButtonClicked(true)}>{strings.publishProject}</MuiButton>
                        <GradientButton handleClick={() => navigate(routesNames.createProject)} buttonText={strings.backToEditProject}></GradientButton>
                    </Stack>
                </Stack>
            </div>
        </>
    )
}

export default PreviewProject