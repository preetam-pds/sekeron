import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { CreatePostRedux, DailogBoxTypeEnum, MediaTypeEum, strings } from '@sekeron/domain'
import { useDispatch, useSelector } from 'react-redux'
import { GradientButton, MuiButton } from 'src/components/common/button/MuiButton'
import styles from './PreviewPost.module.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import routesNames from 'src/routes/RouteNames'
import CustomSuccessDailog from 'src/components/common/dailog/success-dailog/MuiSuccessDailog'
import VideoPlayer from 'src/components/common/video-player/VideoPlayer'
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer'

const PreviewPost = () => {

  const actionDispatch = ((dispatch: any) => ({
    setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  }))

  const createPostState = useSelector((state: any) => state.CreatePostRedux)
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const [isPostPublishedSuccessfully, setIsPostPublishedSuccessfully] = useState(false)
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);

  const audioRefs = useRef([]);
  const navigate = useNavigate()
  const { setCreatePostState } = actionDispatch(useDispatch())

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, createPostState.postDetails.mediaContent.length);
  }, [createPostState.postDetails.mediaContent]);

  const handleShowLessText = (text: any) => {
    const trimText = text.slice(0, 120)
    return trimText
  }

  const handleClickOnMore = () => {
    setIsMoreClicked(!isMoreClicked)
  }

  const handleEditPost = () => {
    navigate(routesNames.createPost)
  }

  const handlePublishPost = () => {
    setIsPostPublishedSuccessfully(true)
    setTimeout(() => {
      setIsPostPublishedSuccessfully(false)
      navigate(routesNames.home);
    }, 3000)
  }

  const handleDailogClose = () => {
    setIsPostPublishedSuccessfully(false)
    navigate(routesNames.home);
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

  const handleUnMute = (index) => {
    const updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
      ...mediaContent,
      isMute: false
    } : { ...mediaContent, isMute: false })

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
        <Box display="flex" alignItems="center" className={styles["image-container"]}>
          <div
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={createMarkup(mediaData.publicUrl)} />
        </Box>
      )
    }
  }

  return (
    <Fragment>
      {isPostPublishedSuccessfully ? <CustomSuccessDailog
        varient={DailogBoxTypeEnum.successDailog}
        open={isPostPublishedSuccessfully}
        handleDailogClose={() => { handleDailogClose() }}
        eventSuccessIcon={true}
      >
        <Typography variant='h2' className={styles["success-message"]}>
          {strings.publishPostSuccessMessage}
        </Typography>
      </CustomSuccessDailog> : null}

      <Stack alignItems={"center"} columnGap={1} textAlign={"center"} sx={{ pt: { xs: 1, sm: 1, md: 0, lg: 0 }, height: "45px" }}>
        <ArrowBackIosRoundedIcon onClick={() => navigate(routesNames.addPostDetails)} className="back-button" />
        <Typography variant="h2" className={styles["preview-post"]}>{strings.previewPost}</Typography>
      </Stack>

      <Grid container className={styles["preview-post-container"]} rowGap={2} xl={8} lg={10} md={12}>

        <Grid item lg={6} md={7} xl={6} className={styles["preview-post-sub-container"]}>
          <Typography variant="h2" className={styles["preview-post-header"]}>{strings.previewPost}</Typography>
          <Typography className={styles["post-title"]}>{createPostState.postDetails.title}</Typography>
          {createPostState.postDetails.description ?
            <>
              <Typography variant="h2" className={styles["post-description-title"]}>{strings.description}</Typography>
              <div className={styles["post-description-container"]}>
                <Typography className={styles['post-description']}>
                  {!isMoreClicked ? handleShowLessText(createPostState.postDetails.description) : createPostState.postDetails.description}
                  <span className={styles['more']} onClick={handleClickOnMore}>{isMoreClicked ? ' show less' : `...${strings.more}`}</span>
                </Typography>
              </div>
              <hr className={styles["divider"]} />
            </>
            : null}

          <Typography className={styles["gallery-header"]}>{strings.mediaGallery}</Typography>
          <div className={styles["posts-container"]} style={{ backgroundColor: createPostState.postDetails.backgroundColor }}>
            <ImageList className={styles["selected-media-container"]} cols={1}>
              <ImageListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                {createPostState.postDetails.mediaContent.map((mediaData, index) => {
                  return (
                    <Box className={mediaData.mediaType === MediaTypeEum.voice ? styles["audio-player-container"] : styles["media-player-container"]}>
                      {UploadedMedia(mediaData, index)}
                    </Box>
                  )
                })}
              </ImageListItem>
            </ImageList>
          </div>
        </Grid>

        <Grid item lg={4} md={4.5} xl={4} flexDirection={"row"} className={styles["button-container"]}>
          <Grid container rowGap={3} sx={{ position: "fixed" }}>
            <Grid item xs={7}>
              <MuiButton className={styles["publish-post"]} onClick={() => handlePublishPost()}>{strings.publishPost}</MuiButton>
            </Grid>
            <Grid item xs={6}>
              <GradientButton handleClick={() => handleEditPost()} buttonText={strings.backToEditPost}></GradientButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Stack className={styles["mobile-button-container"]} direction={"column"} spacing={{ xs: 0, sm: 0, md: 4, lg: 4, xl: 4 }} rowGap={2}>
        <MuiButton className={styles["publish-post"]} onClick={() => handlePublishPost()}>{strings.publishPost}</MuiButton>
        <GradientButton handleClick={() => handleEditPost()} buttonText={strings.backToEditPost}></GradientButton>
      </Stack>
    </Fragment >

  )
}

export default PreviewPost