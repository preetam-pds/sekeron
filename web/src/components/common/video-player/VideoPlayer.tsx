import { Stack, Typography } from '@mui/material'
import { CreatePostRedux, getVideoDuration } from '@sekeron/domain'
import React, { useEffect, useRef, useState } from 'react'
import MuiSlider from '../slider/MuiSlider'
import styles from './VideoPlayer.module.css'
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { useSelector, useDispatch } from 'react-redux'

const VideoPlayer = ({ isThumbnail, videoUrl, data, index, audioRefs, handlePlayPause, handleUnMute, handleMute }: any) => {

    const createPostState = useSelector((state: any) => state.CreatePostRedux)
    const actionDispatch = ((dispatch: any) => ({
        setCreatePostState: (data: any) => dispatch(CreatePostRedux.actions.setCreatePostState(data)),
    }))

    const { setCreatePostState } = actionDispatch(useDispatch())
    const intervalRef: any = useRef();

    const [totalVideoDuration, setTotalVideoDuration] = useState(0);
    const [currentPlayTime, setCurrentPlayTime] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);

    useEffect(() => {
        setTotalVideoDuration(audioRefs?.current[index]?.duration);
        const timer = setTimeout(() => {
            setTotalVideoDuration(audioRefs.current[index].duration == Number.NaN ? 0 : audioRefs?.current[index]?.duration);
        }, 2000);
        return () => {
            clearTimeout(timer);
            clearInterval(intervalRef.current);
        }
    }, []);

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
        if (audioRefs?.current[index]?.ended) {
            const updatedMediaContent = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                ...mediaContent,
                isPlaying: false
            } : { ...mediaContent, isPlaying: false })

            const postDetails = {
                ...createPostState.postDetails,
                mediaContent: [
                    ...updatedMediaContent,
                ]
            }
            const selectedMedia = createPostState.postDetails.mediaContent.map((mediaContent, i) => (i === index) ? {
                ...mediaContent,
                isPlaying: false
            } : { ...mediaContent, isPlaying: false })

            setCreatePostState({
                key: "selectedMedia", value: selectedMedia
            })
            setCreatePostState({ key: "postDetails", value: postDetails })
            setTotalVideoDuration(audioRefs?.current[index]?.duration);
        }
    }, [audioRefs?.current[index]?.ended])

    const handleSliderChange = (value: Event) => {
        audioRefs.current[index].currentTime = value;
        setTrackProgress(audioRefs.current[index].currentTime);
    };

    return (
        <div className={styles["video-container"]}>
            <video
                ref={(el) => (audioRefs.current[index] = el)}
                muted={data?.isMute}
                className={styles["video"]}
                src={videoUrl}
            >
            </video>
            <div className={styles["controls-container"]}>
                <div className={styles["controls"]}>
                    {isThumbnail ?
                        <PlayCircleOutlineRoundedIcon className={styles["thumbnail-icon"]} />
                        :
                        data?.isPlaying ?
                            <PauseCircleOutlineRoundedIcon className={styles["play-pause-icon"]} onClick={() => handlePlayPause(index)} />
                            :
                            <PlayCircleOutlineRoundedIcon className={styles["play-pause-icon"]} onClick={() => handlePlayPause(index)} />
                    }

                </div>
            </div>
            <div className={isThumbnail ? styles["thumbnail-controls"] : styles["video-controls"]}>
                <Stack style={{ width: "90%" }} spacing={2} alignItems={"center"} textAlign={"center"}>
                    {data?.isMute ?
                        <VolumeOffRoundedIcon onClick={() => handleUnMute(index)} className={styles["mute-icon"]} /> :
                        <VolumeUpRoundedIcon onClick={() => handleMute(index)} className={styles["mute-icon"]} />}
                    <Typography className={styles["video-play-time"]}>{getVideoDuration(currentPlayTime)}</Typography>
                    <MuiSlider trackProgress={trackProgress} duration={totalVideoDuration} handleSliderChange={handleSliderChange} />
                    <Typography className={styles["video-play-time"]}>{getVideoDuration(totalVideoDuration)}</Typography>
                </Stack>
            </div>
        </div>
    )
}

export default VideoPlayer