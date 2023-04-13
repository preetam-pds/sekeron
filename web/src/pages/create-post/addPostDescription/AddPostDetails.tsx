import { Box, Card, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { CreatePostRedux, DailogBoxTypeEnum, MediaTypeEum, strings } from '@sekeron/domain'
import React, { useEffect, useRef, useState } from 'react'
import { MuiButton } from 'src/components/common/button/MuiButton'
import styles from './AddPostDetails.module.css'
import AddIcon from '@mui/icons-material/Add';
import { MuiTextField } from 'src/components/common/textfield/MuiTextField'
import { Stack } from '@mui/system'
import ImageAssets from 'src/assets'
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer'
import VideoPlayer from 'src/components/common/video-player/VideoPlayer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import routesNames from 'src/routes/RouteNames'
import CustomColorPicker from 'src/components/common/color-picker/ColorPicker'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import MuiConfirmationDailog from 'src/components/common/dailog/confirmation-dailog/MuiConfirmationDailog'
import { ReactSortable } from "react-sortablejs";
import { arrayMove, SortableContainer, SortableElement, SortableContainerProps, SortableElementProps } from 'react-sortable-hoc';
import CustomSuccessDailog from 'src/components/common/dailog/success-dailog/MuiSuccessDailog'
import { MuiTextArea } from 'src/components/common/mui-text-area/MuiTextArea'

const AppPostDetails = () => {

  const createPostState = useSelector((state: any) => state.CreatePostRedux)
  const actionDispatch = ((dispatch: any) => ({
    setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data))
  }))

  const { setCreatePostState } = actionDispatch(useDispatch())

  const navigate = useNavigate();
  const audioRefs = useRef([]);
  const dragItem: any = useRef();
  const dragOverItem = useRef();
  const anchorRef = React.useRef<any>(null);

  const [open, setOpen] = React.useState(false);
  const [isClearAllClicked, setIsClearAllClicked] = useState(false)
  const [isDicardChangesClicked, setIsDicardChangesClicked] = useState(false)
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);
  const [isSaveClicked, setIsSaveClicked] = useState(false)

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(createPostState.postDetails.mediaContent));
    setCreatePostState({
      key: "selectedMedia", value: [...data]
    })
  }, [])


  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, createPostState.selectedMedia.length);
  }, [createPostState.selectedMedia]);


  const handleDiscard = () => {
    setIsDicardChangesClicked(true)
  }

  const handleDiscardChanges = () => {
    setCreatePostState({
      key: "selectedMedia", value: [...createPostState.postDetails.mediaContent]
    })
    setIsDicardChangesClicked(false)
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target
    const postDetails = {
      ...createPostState.postDetails,
      [name]: value
    }
    setCreatePostState({
      key: "postDetails", value: postDetails
    })
  }

  const handleDeleteMedia = (index: number) => {
    const data = createPostState.selectedMedia.filter((item, i) => index !== i)
    setCreatePostState({
      key: "selectedMedia", value: [...data]
    })
  }

  const handlePostBackgroundChange = (e: any) => {
    const postDetails = {
      ...createPostState.postDetails,
      backgroundColor: e
    }
    setCreatePostState({
      key: "postDetails", value: postDetails
    })
  }

  const handleClear = () => {
    setIsClearAllClicked(true)
  }

  const handleCloseDailog = () => {
    setIsClearAllClicked(false)
    setIsDicardChangesClicked(false)
  }

  const handleConfirmClick = () => {
    setCreatePostState({
      key: "selectedMedia", value: []
    })
    const postDetails = {
      ...createPostState.postDetails,
      mediaContent: []
    }
    setCreatePostState({ key: "postDetails", value: postDetails })
    setIsClearAllClicked(false)
    navigate(routesNames.createPost)
  }

  const handleNext = () => {
    if (createPostState.selectedMedia.length > 0) {
      navigate(routesNames.previewPost)
    }
  }

  const handleReorderClick = () => {
    if (createPostState.selectedMedia.length > 0) {
      navigate(routesNames.postReorder)
    }
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

  const dragStart = (position) => {
    dragItem.current = position;
  };

  const dragEnter = (position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...createPostState.selectedMedia];
    const dragItemContent = copyListItems[dragItem?.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setCreatePostState({
      key: "selectedMedia", value: [...copyListItems]
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

  const handleDailogClose = () => {
    setIsSaveClicked(false)
  }

  const handleSave = () => {
    const postDetails = {
      ...createPostState.postDetails,
      mediaContent: [...createPostState.selectedMedia]
    }
    setCreatePostState({
      key: "postDetails", value: postDetails
    })
    setIsSaveClicked(true)
    setTimeout(() => {
      setIsSaveClicked(false)
    }, 5000)
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

  const UploadedMedia = (mediaData, index) => {
    if (mediaData.mediaType === MediaTypeEum.image) {
      return (
        <img
          src={mediaData.publicUrl}
          srcSet={mediaData.publicUrl}
          alt='title'
          loading='lazy'
          className={styles["uploaded-image"]}
        />
      )
    }
    else if (mediaData.mediaType === MediaTypeEum.voice) {
      return (
        <CustomAudioPlayer data={mediaData} audioUrl={mediaData.publicUrl} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
      )
    }
    else if (mediaData.mediaType === MediaTypeEum.video) {
      return (
        <VideoPlayer videoUrl={mediaData.publicUrl} data={mediaData} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} handleUnMute={handleUnMute} handleMute={handleMute} />
      )
    }
    else if (mediaData.mediaType === MediaTypeEum.text) {
      return (
        <div
          style={{ width: "100%" }}
          dangerouslySetInnerHTML={createMarkup(mediaData.publicUrl)} />
      )
    }
  }

  return (
    <>
      {isClearAllClicked ?
        <MuiConfirmationDailog fisrtButtonLabel={strings.no} secondButtonLabel={strings.yes} isOpen={isClearAllClicked} handleCancel={handleCloseDailog} handleSave={handleConfirmClick}>
          <Typography className={styles["confirmation-description"]}>{strings.areYouSureYouWantToClearTheSelectedItems}</Typography>
        </MuiConfirmationDailog> : null}

      {isDicardChangesClicked ?
        <MuiConfirmationDailog fisrtButtonLabel={strings.no} secondButtonLabel={strings.yes} isOpen={isDicardChangesClicked} handleCancel={handleCloseDailog} handleSave={handleDiscardChanges}>
          <div>
            <Typography className={styles["confirmation-header"]}>{strings.areYouSureYouWantToDiscardChanges}</Typography>
            <Typography className={styles["confirmation-description"]}>{strings.youmightLooseChanges}</Typography>
          </div>
        </MuiConfirmationDailog> : null}

      {isSaveClicked ? <CustomSuccessDailog
        varient={DailogBoxTypeEnum.successDailog}
        open={isSaveClicked}
        handleDailogClose={() => handleDailogClose()}
        eventSuccessIcon={false}
      >
        <Typography variant='h2' className={styles["success-message"]}>
          {strings.publishPostSuccessMessage}
        </Typography>
      </CustomSuccessDailog> : null}

      <div className={styles["add-details-container"]}>

        <div className={styles["post-button-container"]} >
          <Grid container justifyContent={"flex-end"} alignItems={"center"}>
            <Grid item xs={1} lg={1} sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
              <ArrowBackIosRoundedIcon className="back-button" onClick={() => navigate(routesNames.createPost)} />
            </Grid>
            <Grid item xs={11} lg={8} justifyContent={"flex-end"} display={"flex"}>
              <Stack sx={{ columnGap: { xs: 0.5, sm: 0.5, md: 2, lg: 2, xl: 2 } }}>
                <MuiButton data-testid="add-more-media" className={styles["add-more-button"]} startIcon={<AddIcon />} onClick={() => navigate(routesNames.createPost)}>{strings.addMoreMedia}</MuiButton>
                <MuiButton className={styles["re-order"]} onClick={() => handleReorderClick()}>{strings.reorder}</MuiButton>
                <MuiButton onClick={() => handleClear()} className={styles["clear-all"]}>{strings.clearAll}</MuiButton>
                <MuiButton onClick={() => handleNext()} className={styles["next"]}>{strings.next}</MuiButton>
              </Stack>
            </Grid>
          </Grid>
        </div>

        <Grid container className={styles["post-grid-container"]}
          rowGap={0}
          sx={{
            justifyContent: { xs: "center", sm: "center", md: "space-between", lg: "space-between", xl: "space-between" },
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" }
          }}
        >
          <Grid item xs={10} sm={10} md={5.5} lg={6} xl={6}>
            <Stack direction={"column"} rowGap={4}>
              <MuiTextField
                fullWidth
                type="text"
                name="title"
                value={createPostState.postDetails.title}
                onChange={(event: any) => handleChange(event)}
                inputProps={{ "data-testid": "project-title", maxLength: 60 }}
                label={strings.postTitle}
                errorMessage=""
              />
              <MuiTextArea
                fullWidth
                type="text"
                maxLength={500}
                name="description"
                onChange={(event: any) => handleChange(event)}
                value={createPostState.postDetails.description}
                multiline
                rows={4}
                maxRows={4}
                inputProps={{ "data-testid": "project-description", maxLength: 500 }}
                label={strings.descrption}
                errorMessage=""
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={5.5} xl={5.5} className={styles["sub-container"]}>
            <Stack direction={"column"} rowGap={3} sx={{ width: "90%", height: "100%", overflowY: "auto", margin: "auto" }}>
              <Stack justifyContent={"space-between"}>
                <Typography className={styles["reorder"]}>{strings.reorderMedia}</Typography>
                <Stack columnGap={3}>
                  <Typography className={styles["save"]} onClick={() => handleSave()}>{strings.save}</Typography>
                  <Typography className={styles["discard"]} onClick={() => handleDiscard()}>{strings.discard}</Typography>
                </Stack>
              </Stack>

              <Stack className={styles["reorder-media-container"]} >
                {createPostState.selectedMedia.length > 0 && createPostState.selectedMedia?.map((item, index) => (
                  <Stack data-testid="media-cards" key={index} justifyContent={"center"} columnGap={0.5} sx={{ width: "100%" }}>
                    <Card draggable className={styles["media-card"]}
                      onDragStart={(e) => dragStart(index)}
                      onDragEnter={(e) => dragEnter(index)}
                      onDragEnd={drop}>
                      <img src={ImageAssets.ic_hand} alt="" />
                      {renderUploadedMedia(item, index)}
                    </Card>
                    <HighlightOffRoundedIcon onClick={() => handleDeleteMedia(index)} className={styles["cancel"]} />
                  </Stack>
                )
                )}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <div className={styles["preview-post-mobile-container"]}>

          <Stack direction={"column"} className={styles["textfileds-container"]}>
            <MuiTextField
              fullWidth
              type="text"
              name="title"
              value={createPostState.postDetails.title}
              onChange={(event: any) => handleChange(event)}
              inputProps={{ "data-testid": "title", maxLength: 60 }}
              label={strings.postTitle}
              errorMessage={""}
            />
            <MuiTextArea
              fullWidth
              type="text"
              maxLength={500}
              name="description"
              onChange={(event: any) => handleChange(event)}
              value={createPostState.postDetails.description}
              multiline
              rows={4}
              maxRows={4}
              errorMessage={""}
              inputProps={{ "data-testid": "description", maxLength: 500 }}
              label={strings.descrption}
            />
          </Stack>
          <div className={styles["posts-color-picker-container"]}>
            <Stack direction={"column"} sx={{ height: "100%", width: "100%", backgroundColor: createPostState.postDetails.backgroundColor }}>
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
                <p className={styles["select-color"]} >{strings.selectColor}</p>
              </Stack>
              <CustomColorPicker
                anchorRef={anchorRef}
                handleClose={handleClose}
                colorPickerPlacement="bottom"
                handleChange={handlePostBackgroundChange}
                backgroundolor={createPostState.postDetails.backgroundColor}
                oldBackgroundColor={createPostState.postDetails.oldBackgroundColor}
                open={open}
              />
              <ImageList className={styles["posts-container"]} rowHeight={300} cols={1} >
                <ImageListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                  {createPostState.selectedMedia.map((mediaData, index) => {
                    return (
                      <Box
                        className={mediaData.mediaType === MediaTypeEum.voice ? styles["audio-player-container"] : styles["media-player-container"]}
                      >
                        {UploadedMedia(mediaData, index)}
                      </Box>
                    )
                  })}
                </ImageListItem>
              </ImageList>
            </Stack>
          </div>
          <div>
            <MuiButton size="medium" className={styles["add-more"]} startIcon={<AddIcon />} onClick={() => navigate(routesNames.createPost)}>{strings.addMoreMedia}</MuiButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppPostDetails
