import React, { useEffect, useRef, useState } from 'react'
import { Card, Grid, Stack, Typography } from '@mui/material'
import { CreatePostRedux, MediaTypeEum, strings } from '@sekeron/domain'
import { MuiButton } from 'src/components/common/button/MuiButton'
import styles from './PostReorder.module.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Box } from '@mui/system'
import ImageAssets from 'src/assets'
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer'
import VideoPlayer from 'src/components/common/video-player/VideoPlayer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom'
import routesNames from 'src/routes/RouteNames'
import MuiConfirmationDailog from 'src/components/common/dailog/confirmation-dailog/MuiConfirmationDailog'
// import { arrayMove, SortableContainer, SortableElement, SortableContainerProps, SortableElementProps } from 'react-sortable-hoc';

const PostReorder = () => {
    const createPostState = useSelector((state: any) => state.CreatePostRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data)),
        resetCreatePostState: () => dispatch(CreatePostRedux.actions.resetCreatePostState()),
    }))

    const { setCreatePostState } = actionDispatch(useDispatch())
    const navigate = useNavigate()

    const [mediaContent, setMediaContent] = useState([])
    const [isDicardChangesClicked, setIsDicardChangesClicked] = useState(false)
    const [activeAudioIndex, setActiveAudioIndex] = useState(null);

    const dragItem: any = useRef();
    const dragOverItem = useRef();
    const audioRefs = useRef([]);

    useEffect(() => {
        const data = JSON.parse(JSON.stringify(createPostState.postDetails.mediaContent));
        setMediaContent([...data])
    }, [])

    useEffect(() => {
        audioRefs.current = audioRefs.current.slice(0, createPostState.postDetails.mediaContent.length);
    }, [createPostState.postDetails.mediaContent]);

    const handleSave = () => {
        const postDetails = {
            ...createPostState.postDetails,
            mediaContent: [...mediaContent]
        }
        setCreatePostState({
            key: "postDetails", value: postDetails
        })
    }

    const handleDiscardChanges = () => {
        setMediaContent([...createPostState.postDetails.mediaContent])
        setIsDicardChangesClicked(false)
    }

    const handleGoBack = () => {
        navigate(routesNames.addPostDetails)
    }

    const dragStart = (position) => {
        dragItem.current = position;
    };

    const dragEnter = (position) => {
        dragOverItem.current = position;
    };

    const drop = () => {
        const copyListItems = [...mediaContent];
        const dragItemContent = copyListItems[dragItem?.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setMediaContent([...copyListItems])
    };

    const handleDeleteMedia = (index: number) => {
        setMediaContent([...mediaContent.filter((item, i) => index !== i)])
    }

    const handlePlayPause = (index) => {
        let selectedMedia = []

        if (activeAudioIndex === index) {

            if (audioRefs.current[index]?.ended === true) {
                audioRefs.current[index].play();
                setActiveAudioIndex(null);
                selectedMedia = createPostState.selectedMedia.map((mediaContent, i) => (i === index) ? {
                    ...mediaContent,
                    isPlaying: true
                } : { ...mediaContent, isPlaying: false })
            } else {
                selectedMedia = createPostState.selectedMedia.map((mediaContent, i) => (i === index) ? {
                    ...mediaContent,
                    isPlaying: false
                } : { ...mediaContent, isPlaying: false })

                audioRefs.current[index].pause();
                setActiveAudioIndex(null);
            }
        } else {
            if (activeAudioIndex !== null) {
                audioRefs.current[activeAudioIndex].pause();
            }
            audioRefs.current[index].play();
            setActiveAudioIndex(index);

            selectedMedia = createPostState.selectedMedia.map((mediaContent, i) => (i === index) ? {
                ...mediaContent,
                isPlaying: true
            } : { ...mediaContent, isPlaying: false })
        }

        setCreatePostState({
            key: "selectedMedia", value: selectedMedia
        })
    };

    const handleUnMute = (index) => {
        const selectedMedia = createPostState.selectedMedia.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isMute: false
        } : { ...mediaContent })

        setCreatePostState({
            key: "selectedMedia", value: selectedMedia
        })
    }

    const handleMute = (index) => {
        const selectedMedia = createPostState.selectedMedia.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isMute: true
        } : { ...mediaContent })

        setCreatePostState({
            key: "selectedMedia", value: selectedMedia
        })
    }
    const createMarkup = (item) => {
        return { __html: item };
    }

    const renderUploadedMedia = (item, index) => {

        if (item.mediaType === MediaTypeEum.image) {
            return (
                <Box display="flex" alignItems="center" className={styles["image-container"]}>
                    <img src={item.publicUrl} className={styles["uploaded-image"]} alt="" />
                </Box>

            )
        }
        else if (item.mediaType === MediaTypeEum.voice) {
            return (
                <Box display="flex" alignItems="center" className={styles["audio-container"]}>
                    <CustomAudioPlayer data={item} audioUrl={item.publicUrl} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
                </Box>
            )
        }
        else if (item.mediaType === MediaTypeEum.video) {
            return (
                <Box display="flex" alignItems="center" className={styles["image-container"]}>
                    <VideoPlayer isThumbnail={true} videoUrl={item.publicUrl} data={item} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
                </Box>
            )
        }
        else if (item.mediaType === MediaTypeEum.text) {
            return (
                <Box display="flex" alignItems="center" className={styles["image-container"]}>
                    <div
                        style={{ width: "100%" }}
                        dangerouslySetInnerHTML={createMarkup(item.publicUrl)} />
                </Box>
            )
        }
    }

    // const onSortEnd = ({ oldIndex, newIndex }) => {
    //     setMediaContent(arrayMove(mediaContent, oldIndex, newIndex))
    // };

    // const SortableItem: React.ComponentClass<SortableElementProps & { value: string, index: number }, any> = SortableElement(({ value, index }: { value: string, index: number }) =>
    //     <div style={{ width: "100%", marginBottom: "30px" }}>
    //         <Card className={styles["media-card"]}>
    //             <img src={ImageAssets.ic_hand} alt="" />
    //             {renderUploadedMedia(value, index)}
    //             <HighlightOffRoundedIcon onClick={() => handleDeleteMedia(index)} className={styles["cancel"]} />
    //         </Card>
    //     </div>
    // );

    // const SortableList: React.ComponentClass<SortableContainerProps & { items: string[] }, any> = SortableContainer(({ items }: { items: string[] }) => {
    //     return (
    //         <ul>
    //             {items.map((value: any, index: number) => (
    //                 <SortableItem key={`item-${index}`} index={index} value={value} />
    //             ))}
    //         </ul>
    //     );
    // });

    // const shouldCancelStart: any = (e) => {
    //     var targetEle = e;
    //     if (!targetEle.id) {
    //         targetEle = e.target;
    //     }
    //     if (targetEle.id === 'svg') {
    //     }

    // }

    return (
        <>
            {isDicardChangesClicked ?
                <MuiConfirmationDailog fisrtButtonLabel={strings.no} secondButtonLabel={strings.yes} isOpen={isDicardChangesClicked} handleCancel={() => setIsDicardChangesClicked(false)} handleSave={handleDiscardChanges}>
                    <div>
                        <Typography className={styles["confirmation-header"]}>{strings.areYouSureYouWantToDiscardChanges}</Typography>
                        <Typography className={styles["confirmation-description"]}>{strings.youmightLooseChanges}</Typography>
                    </div>
                </MuiConfirmationDailog> : null}
            <div className={styles["post-reorder-container"]}>
                <Grid container className={styles["post-reorder-header-container"]}>
                    <Grid item xs={7}>
                        <Stack alignItems={"center"} columnGap={0.5}>
                            <ArrowBackIosRoundedIcon className="back-button" onClick={() => handleGoBack()} />
                            <Typography variant="h2" className={styles["post-reorder-heder"]}>{strings.reorderingContents}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4.8} justifyContent={"flex-end"} display={"flex"}>
                        <MuiButton onClick={() => setIsDicardChangesClicked(true)} className={styles["discard"]}>{strings.discard}</MuiButton>
                        <MuiButton onClick={() => handleSave()} className={styles["save"]}>{strings.save}</MuiButton>
                    </Grid>
                </Grid>
                <div className={styles["posts-container"]}>
                    <Stack direction={"column"} justifyContent={"center"} rowGap={3} sx={{ width: "100%" }} >
                        {mediaContent.length > 0 && mediaContent?.map((item, index) => (
                            <Stack key={index} justifyContent={"center"} columnGap={0.5} sx={{ width: "100%" }}>
                                <Card draggable className={styles["media-card"]}
                                    onDragStart={(e) => dragStart(index)}
                                    onDragEnter={(e) => dragEnter(index)}
                                    onDragEnd={drop}>
                                    <img src={ImageAssets.ic_hand} alt="" />
                                    {renderUploadedMedia(item, index)}
                                    <HighlightOffRoundedIcon onClick={() => handleDeleteMedia(index)} className={styles["cancel"]} />
                                </Card>
                            </Stack>
                        ))}
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default PostReorder