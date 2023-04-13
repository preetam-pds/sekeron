import { Grid, Stack, Badge, ListItemButton, Box, ImageList, ImageListItem, Typography, useTheme } from '@mui/material';
import { constants, CreateProjectRedux, MediaTypeEum, strings } from '@sekeron/domain';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ImageAssets from 'src/assets';
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer';
import { MuiButton } from 'src/components/common/button/MuiButton';
import DragDropFile from 'src/components/common/drag-and-drop-file/DragAndDropFile';
import TextEditor from 'src/components/common/text-editor/TextEditor';
import VideoPlayer from 'src/components/common/video-player/VideoPlayer';
import { VoiceRecorder } from 'src/components/common/voice-recorder/VoiceRecorder';
import { CreatePostMedia } from 'src/core/json/CreatePostJson';
import styles from './MediaSelection.module.css'
import AddIcon from '@mui/icons-material/Add';
interface IMenuItem {
  id: number;
  icon: string;
  activeIcon: string;
  mediaType: string;
}

const MediaSelection = () => {

  const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
  const actionDispatch = ((dispatch: any) => ({
    setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
  }))

  const { setCreateProjectState } = actionDispatch(useDispatch())
  const theme = useTheme();
  const audioRefs = React.useRef([]);

  const [mediaType, setMediaType] = useState(MediaTypeEum.image)
  const [enteredText, setEnteredText] = useState('')
  const [isAddNewCanvasClicked, setIsAddNewCanvasClicked] = useState(false)
  const [isEditCardClicked, setIsEditCardClicked] = useState(false)
  const [cardIndexToBeEdited, setCardIndexToBeEdited] = useState(null)
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, createProjectState.projectDetails.mediaContent.length);
  }, [createProjectState.projectDetails.mediaContent]);

  const handlePostMediaClick: any = (item) => {
    setCardIndexToBeEdited(null)
    setIsEditCardClicked(false)
    setIsAddNewCanvasClicked(false)
    setMediaType(item.mediaType)
  }

  const handleCardBackgroundColorChange = (e: any) => {
    setCreateProjectState({
      key: "textCardBackgroundColor", value: e
    })
  }

  const handleMediaUpload = (data: any, name?: any) => {
    let projectDetails;
    if (mediaType === MediaTypeEum.text) {
      setIsAddNewCanvasClicked(false)
      setEnteredText("")
      if (isEditCardClicked) {
        const updatedMediaContent = createProjectState.projectDetails.mediaContent.map((mediaContent, index) => (index === cardIndexToBeEdited) ? {
          mediaType: mediaType,
          publicUrl: data,
          text: name,
          backgroundColor: createProjectState.textCardBackgroundColor
        } : mediaContent)

        projectDetails = {
          ...createProjectState.projectDetails,
          mediaContent: [
            ...updatedMediaContent
          ]
        }
        setCardIndexToBeEdited(null)
        setIsEditCardClicked(false)
      }
      else {
        projectDetails = {
          ...createProjectState.projectDetails,
          mediaContent: [...createProjectState.projectDetails.mediaContent, {
            mediaType: mediaType,
            publicUrl: data,
            text: name,
            backgroundColor: createProjectState.textCardBackgroundColor
          }],
        }
      }
    } else {
      if (name === "voiceRecording") {
        projectDetails = {
          ...createProjectState.projectDetails,
          mediaContent: [...createProjectState.projectDetails.mediaContent, {
            // mediaType: mediaType,
            // publicUrl: data,
            mediaType: mediaType,
            publicUrl: data.blobUrl,
            isPlaying: false,
            isMute: false,
            totalDuration: data.totalAudioDuration,
            isRecorded: data.isRecorded
          }]
        }
      } else {
        projectDetails = {
          ...createProjectState.projectDetails,
          mediaContent: [...createProjectState.projectDetails.mediaContent, ...data]
        }
      }
    }
    setCreateProjectState({
      key: "projectDetails", value: projectDetails
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
    const mediaData = createProjectState?.projectDetails?.mediaContent.length > 0 && createProjectState?.projectDetails?.mediaContent?.filter((mediaData, index) => mediaData.mediaType === item.mediaType)
    return mediaData?.length
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
                color={createProjectState.textCardBackgroundColor}
                oldBackgroundColor={createProjectState.previousBackgroundColor}
                handleMediaUpload={handleMediaUpload}
                handleTextChange={handleTextChange}
                enteredText={enteredText}
                module="createProject" />
            }
          </div>
        </>
      )
    }
  }

  return (
    <div className={styles["container"]}>
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
        <Grid item xs={12} sm={12} md={5.4} lg={5.4} xl={5.4} className={styles["sub-container"]}
          order={{ xs: 3, sm: 3, md: 2, lg: 2 }}>
          {uploadDifferentMedia()}
        </Grid>
        <Grid item xs={12} sm={12} md={5.4} lg={5.4} xl={5.4}
          order={{ xs: 1, sm: 1, md: 3, lg: 3 }}
          className={styles["media-container"]}>
          <Box sx={{
            height: {
              xs: mediaType === MediaTypeEum.text ? isAddNewCanvasClicked ? "23%" : "78%" : "100%",
              sm: mediaType === MediaTypeEum.text ? isAddNewCanvasClicked ? "23%" : "78%" : "100%",
              md: "100%",
              lg: "100%",
              xl: "100%"
            },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: createProjectState.projectDetails.mediaContent.length > 0 ? "flex-start" : "center",
            backgroundColor: "#0d0d0d"
          }}
          >
            {createProjectState.projectDetails.mediaContent.length > 0 ?
              <Stack direction={"column"}
                sx={{ height: "100%", width: "100%" }}>
                <ImageList
                  sx={{ overflowY: 'auto', width: "100%", height: "100%" }} rowHeight={200} cols={1}>
                  <ImageListItem sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                    {createProjectState.projectDetails.mediaContent.map((mediaData, index) => {
                      return (
                        <Box draggable className={mediaData.mediaType === MediaTypeEum.voice ? styles["audio-player-container"] : styles["media-player-container"]}>
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
                    oldBackgroundColor={createProjectState.previousBackgroundColor}
                    handleMediaUpload={handleMediaUpload}
                    handleTextChange={handleTextChange}
                    enteredText={enteredText}
                    color={createProjectState.textCardBackgroundColor}
                    module="createProject"
                  />}
              </div>
            </> : null}
        </Grid>
      </Grid>
    </div>
  )
}

export default MediaSelection