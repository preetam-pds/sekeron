import React, { useEffect, useRef, useState } from 'react';
import { Grid, Typography, Stack, ListItemButton, Box, ImageList, ImageListItem, useTheme, Badge } from '@mui/material'
import ImageAssets from '../../assets';
import DragDropFile from '../../components/common/drag-and-drop-file/DragAndDropFile';
import { strings, MediaTypeEum, constants, CreatePostRedux } from '@sekeron/domain';
import styles from './CreatePost.module.css'
import { CreatePostMedia } from '../../core/json/CreatePostJson'
import { VoiceRecorder } from 'src/components/common/voice-recorder/VoiceRecorder';
import TextEditor from 'src/components/common/text-editor/TextEditor';
import { useNavigate } from 'react-router-dom';
import { MuiButton } from 'src/components/common/button/MuiButton';
import routesNames from 'src/routes/RouteNames';
import { useDispatch, useSelector } from 'react-redux';
import CustomColorPicker from 'src/components/common/color-picker/ColorPicker';
import AddIcon from '@mui/icons-material/Add';
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer';
import VideoPlayer from 'src/components/common/video-player/VideoPlayer';
import MuiConfirmationDailog from 'src/components/common/dailog/confirmation-dailog/MuiConfirmationDailog';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
interface IMenuItem {
    id: number;
    icon: string;
    activeIcon: string;
    mediaType: string;
}

const CreatePost = () => {

    const createPostState = useSelector((state: any) => state.CreatePostRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data)),
    }))

    const audioRefs = useRef([]);
    const anchorRef = useRef<any>(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const { setCreatePostState } = actionDispatch(useDispatch())

    const [mediaType, setMediaType] = useState(MediaTypeEum.image)
    const [enteredText, setEnteredText] = useState('')
    const [isAddNewCanvasClicked, setIsAddNewCanvasClicked] = useState(false)
    const [isEditCardClicked, setIsEditCardClicked] = useState(false)
    const [cardIndexToBeEdited, setCardIndexToBeEdited] = useState(null)
    const [isClearAllClicked, setIsClearAllClicked] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeAudioIndex, setActiveAudioIndex] = useState(null);

    useEffect(() => {
        audioRefs.current = audioRefs.current.slice(0, createPostState.postDetails.mediaContent.length);
        if (createPostState.postDetails.mediaContent.length > 0) {
            const element = document.getElementById(createPostState.postDetails.mediaContent[createPostState.postDetails.mediaContent.length - 1].publicUrl);
            element.scrollTop = element.scrollHeight;
        }
    }, [createPostState.postDetails.mediaContent]);

    const handlePostMediaClick: any = (item) => {
        setCardIndexToBeEdited(null)
        setIsEditCardClicked(false)
        setIsAddNewCanvasClicked(false)
        setMediaType(item.mediaType)
    }

    const handleCardBackgroundColorChange = (e: any) => {
        const postDetails = {
            ...createPostState.postDetails,
            cardBackgroundColor: e
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    }

    const handlePostsBackgroundChange = (e: any) => {
        const postDetails = {
            ...createPostState.postDetails,
            backgroundColor: e
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    }

    const handleMediaUpload = (data: any, name?: any) => {

        let postDetails;
        if (mediaType === MediaTypeEum.text) {
            setIsAddNewCanvasClicked(false)
            setEnteredText("")
            if (isEditCardClicked) {
                const updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, index) => (index === cardIndexToBeEdited) ? {
                    mediaType: mediaType,
                    publicUrl: data,
                    text: name,
                    backgroundColor: createPostState.postDetails.cardBackgroundColor
                } : mediaContent)

                postDetails = {
                    ...createPostState.postDetails,
                    mediaContent: [...updatedMediaContent]
                }
                setCardIndexToBeEdited(null)
                setIsEditCardClicked(false)
            }
            else {
                postDetails = {
                    ...createPostState.postDetails,
                    mediaContent: [...createPostState.postDetails.mediaContent, {
                        mediaType: mediaType,
                        publicUrl: data,
                        backgroundColor: createPostState.postDetails.cardBackgroundColor,
                        text: name
                    }],
                }
            }
        } else {
            if (name === "voiceRecording") {
                postDetails = {
                    ...createPostState.postDetails,
                    mediaContent: [...createPostState.postDetails.mediaContent, {
                        mediaType: mediaType,
                        publicUrl: data.blobUrl,
                        isPlaying: false,
                        isMute: false,
                        totalDuration: data.totalAudioDuration,
                        isRecorded: data.isRecorded
                    }]
                }
            } else {
                postDetails = {
                    ...createPostState.postDetails,
                    mediaContent: [...createPostState.postDetails.mediaContent, ...data]
                }
            }
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    }

    const handleEditCard = (item: any, index: number) => {
        setIsEditCardClicked(true)
        setCardIndexToBeEdited(index)
        setEnteredText(item.text)
        setIsAddNewCanvasClicked(true)
        setMediaType(MediaTypeEum.text)
        handleCardBackgroundColorChange(item.backgroundColor)
    }

    const handleTextChange: any = (e: any) => {
        setEnteredText(e)
    }

    const getMediaCount = (item) => {
        const mediaData = createPostState?.postDetails?.mediaContent.length > 0 && createPostState?.postDetails?.mediaContent?.filter((mediaData, index) => mediaData.mediaType === item.mediaType)
        return mediaData?.length
    }

    const handleNext = () => {
        const data = JSON.parse(JSON.stringify(createPostState.postDetails.mediaContent));
        setCreatePostState({
            key: "selectedMedia", value: [...data]
        })
        navigate(routesNames.addPostDetails)
    }

    const handleConfirmClick = () => {
        setIsClearAllClicked(false)
        const postDetails = {
            ...createPostState.postDetails,
            mediaContent: []
        }
        setCreatePostState({ key: "postDetails", value: postDetails })
    }

    const handlePlayPause = (index) => {
        let postDetails = {}
        if (activeAudioIndex === index) {
            let updatedMediaContent = []
            if (audioRefs.current[index]?.ended === true) {
                audioRefs.current[index].play();
                setActiveAudioIndex(null);
                updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                    ...mediaContent,
                    isPlaying: true
                } : { ...mediaContent, isPlaying: false })
            } else {
                updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                    ...mediaContent,
                    isPlaying: false
                } : { ...mediaContent, isPlaying: false })

                audioRefs.current[index].pause();
                setActiveAudioIndex(null);
            }
            postDetails = {
                ...createPostState.postDetails,
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

            const updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                ...mediaContent,
                isPlaying: true
            } : { ...mediaContent, isPlaying: false })

            postDetails = {
                ...createPostState.postDetails,
                mediaContent: [
                    ...updatedMediaContent,
                ]
            }
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
        const postDetails = {
            ...createPostState.postDetails,
            oldBackgroundColor: createPostState.postDetails.backgroundColor
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    };

    const handleUnMute = (index) => {
        const updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isMute: false
        } : { ...mediaContent })

        const postDetails = {
            ...createPostState.postDetails,
            mediaContent: [
                ...updatedMediaContent
            ]
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    }

    const handleMute = (index) => {
        const updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isMute: true
        } : { ...mediaContent })

        const postDetails = {
            ...createPostState.postDetails,
            mediaContent: [
                ...updatedMediaContent
            ]
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
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
                <VideoPlayer videoUrl={item.publicUrl} data={item} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
            )
        }
        else if (item.mediaType === MediaTypeEum.text) {
            return (
                <div
                    onClick={() => handleEditCard(item, index)}
                    dangerouslySetInnerHTML={createMarkup(item.publicUrl)} />
            )
        }
    }

    const uploadDifferentMedia = () => {
        if (mediaType === MediaTypeEum.image) {
            return (
                <DragDropFile name="images" handleMediaUpload={handleMediaUpload} accept={constants.imageType} mediaType={mediaType} mediaTypeIcon={ImageAssets.ic_image_gallery} />
            )
        }
        else if (mediaType === MediaTypeEum.voice) {
            return (
                <Stack direction={"column"}
                    sx={{
                        width: { xs: "75%", sm: "60%", md: "90%", lg: "75%" },
                        alignItems: { xs: "center" },
                        rowGap: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5 }
                    }}>
                    <VoiceRecorder handleMediaUpload={handleMediaUpload} />
                    <DragDropFile name="audios" handleMediaUpload={handleMediaUpload} accept={constants.audioType} mediaType={mediaType} mediaTypeIcon={ImageAssets.ic_audio_inactive} />
                </Stack>
            )
        }
        else if (mediaType === MediaTypeEum.video) {
            return (
                <DragDropFile name="videos" handleMediaUpload={handleMediaUpload} accept={constants.videoType} mediaType={mediaType} mediaTypeIcon={ImageAssets.ic_image_gallery} />
            )
        }
        else if (mediaType === MediaTypeEum.text) {
            return (
                <>
                    <div className={styles["text-editor-container"]}>
                        {!isAddNewCanvasClicked ?
                            <MuiButton onClick={() => setIsAddNewCanvasClicked(true)} startIcon={<AddIcon />} className={styles["add-new-canvas"]}>{strings.addNewCanvas}</MuiButton>
                            :
                            <TextEditor
                                handleChange={handleCardBackgroundColorChange}
                                color={createPostState.postDetails.cardBackgroundColor}
                                oldBackgroundColor={createPostState.postDetails.oldCardBackgroundColor}
                                handleMediaUpload={handleMediaUpload}
                                handleTextChange={handleTextChange}
                                enteredText={enteredText}
                            />
                        }
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {isClearAllClicked ?
                <MuiConfirmationDailog
                    fisrtButtonLabel={strings.no}
                    secondButtonLabel={strings.yes}
                    isOpen={isClearAllClicked}
                    handleCancel={() => setIsClearAllClicked(false)}
                    handleSave={handleConfirmClick}>
                    <Typography className={styles["confirmation-description"]}>{strings.areYouSureYouWantToClearTheSelectedItems}</Typography>
                </MuiConfirmationDailog> : null}

            <div className={styles["create-post-container"]}>
                <Stack className={styles["create-post-header-container"]}>
                    <Stack alignItems={"center"} columnGap={1} textAlign={"center"} sx={{ pt: { xs: 1, sm: 1, md: 0, lg: 0 }, height: "30px" }}>
                        <ArrowBackIosRoundedIcon onClick={() => navigate(-1)} className="back-button" />
                        <Typography variant="h2" className={styles["create-post-heder"]}>{strings.createPost}</Typography>
                    </Stack>
                    {createPostState?.postDetails?.mediaContent.length > 0 && <Stack
                        justifyContent={"flex-end"}
                        sx={{ width: "30%" }}
                        spacing={{ xs: 0, sm: 0, md: 4, lg: 4, xl: 4 }}>
                        <MuiButton onClick={() => setIsClearAllClicked(true)} className={styles["clear-all"]}>{strings.clearAll}</MuiButton>
                        <MuiButton onClick={() => handleNext()} className={styles["next"]}>{strings.next}</MuiButton>
                    </Stack>}

                </Stack>

                <Grid container className={styles["items-container"]}>
                    <Grid item xs={12} sm={12} md={0.5} lg={0.5} order={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                        <Stack
                            sx={{
                                rowGap: { xs: 0, sm: 0, md: 5, lg: 5, xl: 5 },
                                justifyContent: { xs: 'space-between' },
                                width: { xs: "100%", sm: "100%", md: "90%", lg: "90%" },
                                flexDirection: { xs: "row", sm: "row", md: "column", lg: "column", xl: "column" }
                            }}>
                            {CreatePostMedia.map((item: IMenuItem, index: number) => {
                                return (
                                    <Badge
                                        key={index}
                                        badgeContent={getMediaCount(item)}
                                        sx={{
                                            "& .MuiBadge-badge": {
                                                color: theme.palette.primary.dark,
                                                backgroundColor: theme.palette.success.main,
                                                fontFamily: "comfortaa-Regular",
                                                fontSize: "1.2rem",
                                                textAlign: "center",
                                                marginTop: "16px",
                                                marginLeft: "16px",
                                            }
                                        }}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}>
                                        <ListItemButton key={index} selected={mediaType === item.mediaType} onClick={() => handlePostMediaClick(item)}>
                                            {mediaType === item.mediaType ? <img alt="" src={item.activeIcon} className={styles["menu-items"]} /> : <img alt="" src={item.icon} className={styles["menu-items"]} />}
                                        </ListItemButton>
                                    </Badge>
                                );
                            })}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5.4} lg={5.4} xl={5.4} className={styles["upload-media-container"]}
                        order={{ xs: 3, sm: 3, md: 2, lg: 2 }}>
                        {uploadDifferentMedia()}
                    </Grid>
                    <Grid item xs={12} sm={12} md={5.4} lg={5.4} xl={5.4}
                        order={{ xs: 1, sm: 1, md: 3, lg: 3 }}
                        // ref={bottomRef}
                        className={styles["uploaded-media-container"]}>
                        <Box
                            className={mediaType === MediaTypeEum.text && isAddNewCanvasClicked ? styles["uploaded-media-text-container"] : styles["uploaded-media-sub-container"]}
                            sx={{
                                background: {
                                    xs: "none",
                                    md: createPostState.postDetails.mediaContent.length > 0 ? createPostState.postDetails.backgroundColor : createPostState.postDetails.oldBackgroundColor,
                                },
                                alignItems: createPostState.postDetails.mediaContent.length > 0 ? "flex-start" : "center",
                                width: "100%",
                                justifyContent: "center",
                            }}
                        >
                            {createPostState.postDetails.mediaContent.length > 0 ?
                                <Stack direction={"column"}
                                    sx={{ height: "100%", width: "100%" }}>
                                    <Stack
                                        ref={anchorRef}
                                        textAlign={"center"}
                                        alignItems={"center"}
                                        columnGap={2}
                                        mb={0}
                                        justifyContent={"center"}
                                        onClick={handleToggle}
                                        className={styles["color-selection-bar"]}>
                                        <div className={styles["color-wheel"]} style={{ backgroundColor: createPostState.postDetails.backgroundColor }}></div>
                                        <p className={styles["select-color"]}>{strings.selectColor}</p>
                                    </Stack>
                                    <CustomColorPicker
                                        anchorRef={anchorRef}
                                        colorPickerPlacement="bottom"
                                        handleChange={handlePostsBackgroundChange}
                                        backgroundolor={createPostState.postDetails.backgroundColor}
                                        open={open}
                                        oldBackgroundColor={createPostState.postDetails.oldBackgroundColor}
                                        handleClose={handleClose}
                                    />
                                    <ImageList
                                        sx={{ overflowY: 'auto', width: "100%", height: "100%" }} rowHeight={200} cols={1}>
                                        <ImageListItem sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                            {createPostState.postDetails.mediaContent.map((mediaData, index) => {
                                                return (
                                                    <Box id={mediaData.publicUrl} draggable className={mediaData.mediaType === MediaTypeEum.voice ? styles["audio-player-container"] : styles["media-player-container"]}>
                                                        {UploadedMedia(mediaData, index)}
                                                    </Box>
                                                );
                                            })}
                                        </ImageListItem>
                                    </ImageList>
                                </Stack> :
                                <>
                                    <Stack className={styles["timer-image-container"]} spacing={5} direction={"column"}>
                                        <img alt="timer" src={ImageAssets.ic_timer} className={styles["timer-image"]} />
                                        <Typography className={styles["upload-file-text"]}>{strings.uploadedFilesWillBeShownHere}</Typography>
                                    </Stack>

                                    <Stack className={styles["timer-image-container-mobile"]} direction={"column"} spacing={1}>
                                        <img alt="" src={ImageAssets.ic_grid} className={styles["grid-image"]} />
                                        <Typography variant="h2" className={styles["create-post"]}>{strings.createAPost}</Typography>
                                        <Typography variant="h6" className={styles["create-post-description"]}>{strings.uploadYourDesires}</Typography>
                                    </Stack>
                                </>}
                        </Box>
                        {mediaType === MediaTypeEum.text ?
                            <>
                                <div className={isAddNewCanvasClicked ? styles["text-editor-container-mobile"] : styles["canvas-button-container"]}>
                                    {!isAddNewCanvasClicked ?
                                        <MuiButton onClick={() => setIsAddNewCanvasClicked(true)} startIcon={<AddIcon />} className={styles["add-new-canvas"]}>{strings.addNewCanvas}</MuiButton>
                                        :
                                        <TextEditor
                                            handleChange={handleCardBackgroundColorChange}
                                            color={createPostState.postDetails.cardBackgroundColor}
                                            oldBackgroundColor={createPostState.postDetails.oldCardBackgroundColor}
                                            handleMediaUpload={handleMediaUpload}
                                            handleTextChange={handleTextChange}
                                            enteredText={enteredText}
                                        />}
                                </div>
                            </> : null}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default CreatePost
