import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { mediaGalleryTabSwitcherEnumUtils, strings } from '@sekeron/domain';
import { mediaGallery } from '@sekeron/domain/dist/utils/json/MyProjectsJson';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer';
import MuiGradientTabs from 'src/components/common/mui-tabs/gradient-tabs/MuiGradientTabs';
import VideoPlayer from 'src/components/common/video-player/VideoPlayer';
import { tabData } from 'src/core/json/TabsDataJson';
import styles from './MediaGallery.module.css'

export const MediaGallery = () => {

    const navigate = useNavigate()
    const tabData = mediaGalleryTabSwitcherEnumUtils.getmediaGalleryTabSwitcherEnums()
    const audioRefs = useRef([]);
    const videoRefs = useRef([]);

    const [tabValue, setTabValue] = useState<Number>(0);
    const [activeAudioIndex, setActiveAudioIndex] = useState(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);
    const [mediaData, setMediaData] = useState<any>({ ...mediaGallery })

    useEffect(() => {
        const videos = mediaGallery.videos.map((item) => ({
            ...item, isPlaying: false, isMute: false
        }))

        const audios = mediaGallery.audios.map((item) => ({
            ...item, isPlaying: false, isMute: false
        }))

        setMediaData({ ...mediaGallery, videos: [...videos], audios: [...audios] })
    }, [])

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, mediaGallery.videos.length);
    }, [mediaGallery.videos]);

    useEffect(() => {
        audioRefs.current = audioRefs.current.slice(0, mediaGallery.audios.length);
    }, [mediaGallery.audios]);

    const handleTabChange = (event: React.SyntheticEvent, value: Number) => {
        setTabValue(value);
    };

    const handlePlayPause = (index) => {
        console.log("its in play pause", index)

        let mediaGalleryData = {}
        if (activeVideoIndex === index) {
            let videos = []
            if (videoRefs.current[index]?.ended === true) {
                videoRefs.current[index].play();
                setActiveVideoIndex(null);
                videos = mediaData.videos.map((item, i) => (i === index) ?
                    { ...item, isPlaying: true } : { ...item, isPlaying: true }
                )
            } else {
                videos = mediaData.videos.map((item, i) => (i === index) ?
                    { ...item, isPlaying: false } : { ...item, isPlaying: false }
                )
                videoRefs.current[index].pause();
                setActiveVideoIndex(null);
            }
            mediaGalleryData = {
                ...mediaData,
                videos: [...videos]
            }
        } else {
            if (activeVideoIndex !== null) {
                videoRefs.current[activeVideoIndex].pause();
            }
            videoRefs.current[index].play();
            setActiveVideoIndex(index);

            const videos = mediaData.videos.map((item, i) => (i === index) ?
                { ...item, isPlaying: true } : { ...item, isPlaying: false }
            )
            mediaGalleryData = {
                ...mediaData,
                videos: [...videos]
            }
        }
        setMediaData({ ...mediaGalleryData })
    };

    const handleAudioPlayPause = (index) => {
        console.log("its in play pause", index)
        let mediaGalleryData = {}
        if (activeAudioIndex === index) {
            let audios = []
            if (audioRefs.current[index]?.ended === true) {
                console.log("its in ended", index)
                audioRefs.current[index].play();
                setActiveAudioIndex(null);
                audios = mediaData.audios.map((item, i) => (i === index) ?
                    { ...item, isPlaying: true } : { ...item, isPlaying: true }
                )
            } else {
                audios = mediaData.audios.map((item, i) => (i === index) ?
                    { ...item, isPlaying: false } : { ...item, isPlaying: false }
                )
                audioRefs.current[index].pause();
                setActiveAudioIndex(null);
            }
            mediaGalleryData = {
                ...mediaData,
                audios: [...audios]
            }
        } else {
            console.log("its in play", index, activeAudioIndex)

            if (activeAudioIndex !== null) {
                console.log("its in pause previous", index, activeAudioIndex)

                audioRefs.current[activeAudioIndex].pause();
            }
            audioRefs.current[index].play();
            setActiveAudioIndex(index);

            const audios = mediaData.audios.map((item, i) => (i === index) ?
                { ...item, isPlaying: true } : { ...item, isPlaying: false }
            )
            mediaGalleryData = {
                ...mediaData,
                audios: [...audios]
            }
        }
        setMediaData({ ...mediaGalleryData })
    };

    const handleUnMute = (index) => {
        const videos = mediaData.videos.map((item, i) => (i === index) ?
            { ...item, isMute: false } : { ...item }
        )
        setMediaData({
            ...mediaData,
            videos: [...videos]
        })
    }

    const handleMute = (index) => {
        const videos = mediaData.videos.map((item, i) => (i === index) ?
            { ...item, isMute: true } : { ...item }
        )
        setMediaData({
            ...mediaData,
            videos: [...videos]
        })
    }

    const calculateGridWidth = (index) => {
        const value = index % 6
        if (value === 0 || value === 3) {
            return 3;
        } else if (value === 1 || value === 2) {
            return 1;
        } else if (value === 4 || value === 5) {
            return 2;
        }
    };

    const renderPhotos = () => {
        return (
            <>
                <div className={styles["image-list-mobile-view"]}>
                    <ImageList
                        sx={{ width: "100%", height: "auto" }}
                        variant="quilted"
                        cols={4}
                        rowHeight={150}
                        gap={8}
                    >
                        {mediaGallery.images.map((item, index) => (
                            <ImageListItem
                                key={item.publicUrl}
                                cols={calculateGridWidth(index % 6)}
                                rows={1}
                            >
                                <img
                                    src={`${item.publicUrl}`}
                                    srcSet={`${item.publicUrl}`}
                                    loading="lazy" />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <Grid container justifyContent={"space-between"} rowGap={2} sx={{ display: { xs: "none", lg: "flex" } }}>
                    {mediaGallery.images.map((item) => (
                        <Grid item lg={2.3} className={styles["image-container"]}>
                            <img src={item.publicUrl} />
                        </Grid>
                    ))}
                </Grid></>
        )
    }

    const renderVideos = () => {
        return (
            <Grid container rowGap={3} columnGap={3}>
                {mediaData.videos.map((item, index) => (
                    <Grid item xs={12} lg={3.8} className={styles["video-container"]}>
                        <VideoPlayer videoUrl={item.publicUrl} data={item} index={index} audioRefs={videoRefs} handlePlayPause={handlePlayPause} handleMute={handleMute} handleUnMute={handleUnMute} />
                    </Grid>
                ))}
            </Grid>
        )
    }

    const renderAudios = () => {
        return (
            <Grid container justifyContent={"space-between"} rowGap={3}>
                {mediaData.audios.map((item, index) => (
                    <Grid item xs={12} className={styles["audio-container"]}>
                        <CustomAudioPlayer data={item} audioUrl={item.publicUrl} index={index} audioRefs={audioRefs} handlePlayPause={handleAudioPlayPause} />
                    </Grid>
                ))}
            </Grid>
        )
    }

    const createMarkup = (item) => {
        return { __html: item };
    }

    const renderScripts = () => {
        return (
            <Grid container justifyContent={"space-between"} rowGap={2}>
                {mediaData.scripts.map((item, index) => (
                    <Grid item xs={12}  >
                        <div dangerouslySetInnerHTML={createMarkup(item.publicUrl)} />
                    </Grid>
                ))}
            </Grid>
        )
    }

    return (
        <div className={styles["media-galley-container"]}>
            <MuiGradientTabs
                isDashboardTabs={true}
                tabValue={tabValue}
                handleTabChange={handleTabChange}
                tabData={tabData}
            />
            {tabValue === 0 &&
                <Stack className={styles["medias-container"]}>
                    <Typography className={styles["media-header"]}>{strings.photos}</Typography>
                    {renderPhotos()}
                    <Typography className={styles["media-header"]}>{strings.videos}</Typography>
                    {renderVideos()}
                    <Typography className={styles["media-header"]}>{strings.audios}</Typography>
                    {renderAudios()}
                    <Typography className={styles["media-header"]}>{strings.scripts}</Typography>
                    {renderScripts()}
                </Stack>
            }
            {tabValue === 1 &&
                <Stack className={styles["medias-container"]}>
                    {renderPhotos()}
                </Stack>
            }
            {tabValue === 2 &&
                <Stack className={styles["medias-container"]}>
                    {renderVideos()}
                </Stack>
            }
            {tabValue === 3 &&
                <Stack className={styles["medias-container"]}>
                    {renderAudios()}
                </Stack>
            }
            {tabValue === 4 &&
                <Stack className={styles["medias-container"]}>
                    {renderScripts()}
                </Stack>
            }
        </div>
    )
}
