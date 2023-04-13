import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import styles from "./AudioPlayer.module.css";
import MuiSlider from "../slider/MuiSlider";
import { CreatePostRedux, CreateProjectRedux, getVideoDuration } from '@sekeron/domain'
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { useSelector, useDispatch } from "react-redux";
import { HomeRedux } from "@sekeron/domain/dist/redux/home-redux/HomeRedux";
interface ICustomAudioPlayerProps {
  audioUrl: any;
  data: any;
  index?: number;
  audioRefs?: any;
  handlePlayPause?: any;
  handleUnMute?: any;
  handleMute?: any
}

export const CustomAudioPlayer = ({ audioUrl, data, index, audioRefs, handlePlayPause, handleMute, handleUnMute }: ICustomAudioPlayerProps) => {
  const createPostState = useSelector((state: any) => state.CreatePostRedux)
  const createProjectState = useSelector((state: any) => state.CreateProjectRedux)
  const homeState = useSelector((state: any) => state.HomeRedux);

  const actionDispatch = ((dispatch: any) => ({
    setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data)),
    setCreateProjectState: (data: any) => dispatch(CreateProjectRedux.actions.setCreateProjectState(data)),
    setHomeState: (data: any) => dispatch(HomeRedux.actions.setHomeState(data)),
  }))

  const { setCreatePostState, setCreateProjectState, setHomeState } = actionDispatch(useDispatch());

  const intervalRef: any = useRef();

  const [trackProgress, setTrackProgress] = useState(0);
  const [totalAudioDuration, setTotalAudioDuration] = useState(0);
  const [currentPlayTime, setCurrentPlayTime] = useState(0);

  useEffect(() => {
    setTotalAudioDuration(audioRefs.current[index]?.duration);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [])

  useEffect(() => {
    audioRefs?.current[index]?.addEventListener('loadedmetadata', () => {
      setTotalAudioDuration(audioRefs.current[index]?.duration);
    });
    return () => {
      audioRefs?.current[index]?.removeEventListener('loadedmetadata', () => {
        setTotalAudioDuration(audioRefs.current[index].duration);
      });
    };
  }, [audioRefs?.current[index]])

  useEffect(() => {
    if (data?.isPlaying) {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setCurrentPlayTime(audioRefs.current[index].currentTime);
        setTrackProgress(audioRefs.current[index].currentTime)
      }, 1000);
    }
  }, [data?.isPlaying])

  useEffect(() => {
    if (audioRefs.current[index]?.ended) {

      const postDetails = {
        ...createPostState.postDetails,
        mediaContent: [
          ...createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
            ...mediaContent,
            isPlaying: false
          } : { ...mediaContent, isPlaying: false }),
        ]
      }
      setCreatePostState({ key: "postDetails", value: postDetails })

      setCreatePostState({
        key: "selectedMedia", value: createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
          ...mediaContent,
          isPlaying: false
        } : { ...mediaContent, isPlaying: false })
      })

      setCreateProjectState({
        key: "projectDetails", value: {
          ...createProjectState.projectDetails,
          mediaContent: [
            ...createProjectState.projectDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
              ...mediaContent,
              isPlaying: false
            } : { ...mediaContent, isPlaying: false }),
          ]
        }
      })
      setTotalAudioDuration(audioRefs.current[index].duration);
    }
  }, [audioRefs?.current[index]?.ended])


  const handleSliderChange = (value: any) => {
    const valueCoversion: any = value
    audioRefs.current[index].currentTime = valueCoversion;
    setTrackProgress(audioRefs.current[index].currentTime);
  };

  return (
    <React.Fragment>
      <div className={styles["custom-audio-container"]}>
        <audio
          ref={(el) => (audioRefs.current[index] = el)}
          className={styles["audio"]}
          src={audioUrl}
          muted={data?.isMute}>
        </audio>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          spacing={0}>
          <Grid item xs={12}>
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={1.5}
            >
              {data?.isMute ? (
                <VolumeOffRoundedIcon className={styles["audio-play-pause-icon"]} onClick={() => handleUnMute(index, data)} />
              ) : (
                <VolumeUpRoundedIcon className={styles["audio-play-pause-icon"]} onClick={() => handleMute(index, data)} />
              )}
              {data?.isPlaying ? (
                <PauseRoundedIcon className={styles["audio-play-pause-icon"]} onClick={() => handlePlayPause(index, data)} />) : (
                <PlayArrowRoundedIcon className={styles["audio-play-pause-icon"]} onClick={() => handlePlayPause(index, data)} />
              )}
              <MuiSlider trackProgress={trackProgress} duration={data?.isRecorded && totalAudioDuration === Infinity ? data.totalDuration : totalAudioDuration} handleSliderChange={handleSliderChange} />
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <Typography className={styles["current-play-time"]}>{getVideoDuration(currentPlayTime)}</Typography>
            <Typography className={styles["total-time"]}>{data?.isRecorded && totalAudioDuration === Infinity ? getVideoDuration(data.totalDuration) : getVideoDuration(totalAudioDuration)}</Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
