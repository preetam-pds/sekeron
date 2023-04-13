import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
// import { useAudioRecorder } from 'react-audio-voice-recorder';
import ImageAssets from 'src/assets';
import styles from './VoiceRecorder.module.css'
import { useReactMediaRecorder } from "react-media-recorder";
import { getVideoDuration } from '@sekeron/domain';

export const VoiceRecorder = ({ handleMediaUpload }: any) => {

    // const {
    //     startRecording,
    //     stopRecording,
    //     togglePauseResume,
    //     recordingBlob,
    //     isRecording,
    //     isPaused,
    //     recordingTime,
    // } = useAudioRecorder();

    const { status, startRecording, stopRecording, mediaBlobUrl, pauseRecording, resumeRecording } =
        useReactMediaRecorder({
            video: false,
            audio: true,
            // echoCancellation: true
        });

    const intervalRef: any = useRef();

    const [isRecording, setIsRecording] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [duration, setDuration] = useState(0)
    const [isDeleteClicked, setIsDeleteClicked] = useState(false)
    const [isAudioRecording, setIsAudioRecording] = useState(false)


    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDuration((duration) => duration + 1);
        }, 1000);
    };

    useEffect(() => {
        if (!isDeleteClicked) {
            if (mediaBlobUrl) {
                const data = {
                    blobUrl: mediaBlobUrl,
                    totalAudioDuration: duration,
                    isRecorded: true
                }
                handleMediaUpload(data, "voiceRecording")
            }
            setIsDeleteClicked(false)
        }
    }, [mediaBlobUrl])

    useEffect(() => {
        if (isAudioRecording) {
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            pauseRecording()
        }
    }, [isAudioRecording]);

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
            pauseRecording()
            stopRecording()
            setIsAudioRecording(false)
            setDuration(0)
        };
    }, []);

    const handleStartRecording = () => {
        setIsDeleteClicked(false)
        setDuration(0)
        startRecording()
        setIsRecording(true)
        setIsAudioRecording(true)
    }

    // const handlePausePlay = () => {
    //     togglePauseResume()
    // }

    const handlePuase = () => {
        pauseRecording()
        setIsPaused(true)
        setIsAudioRecording(false)
    }

    const handleResume = () => {
        resumeRecording()
        setIsPaused(false)
        setIsAudioRecording(true)
    }

    const handleDelete = () => {
        handleStopRecording()
        setDuration(0)
        setIsDeleteClicked(true)
    }

    const handleStopRecording = () => {
        stopRecording()
        pauseRecording();
        setIsRecording(false)
        setIsAudioRecording(false)
    }

    return (
        <Grid container
            className={styles["voice-recorder-container"]}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"center"}
        >
            <Grid item>
                {isRecording ?
                    <Stack justifyContent={"space-between"}
                        columnGap={2}
                        alignItems={"center"}
                        textAlign={"center"}>
                        {!isPaused ? <img src={ImageAssets.ic_voice_recorder_pause} alt="play recording" onClick={() => handlePuase()} className={styles["pause-play-icon"]} /> :
                            <img src={ImageAssets.ic_voice_recording} alt="pause recording" onClick={() => handleResume()} className={styles["pause-play-icon"]} />
                        }
                        <Typography>{getVideoDuration(duration)}</Typography>
                        <img src={ImageAssets.ic_delete} className={styles["delete-image"]} alt="delete" onClick={() => handleDelete()} />
                    </Stack>
                    :
                    <img src={ImageAssets.ic_voice_recorder} alt="start recording" onClick={() => handleStartRecording()} className={styles["recorder-image"]} />}
            </Grid>
            {isRecording ? <Grid item>
                <img src={ImageAssets.ic_upload} alt="upload" className={styles["upload-image"]} onClick={() => handleStopRecording()} />
            </Grid> : null}
        </Grid>
    )
}