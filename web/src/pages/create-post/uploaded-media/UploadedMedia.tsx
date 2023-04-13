import React from 'react'
import { MediaTypeEum } from '@sekeron/domain'
import { CustomAudioPlayer } from 'src/components/common/audio-player/AudioPlayer'
import VideoPlayer from 'src/components/common/video-player/VideoPlayer'
import styles from './UploadedMedia.module.css'

const UploadedMedia = ({ mediaData, index, audioRefs, handlePlayPause }: any) => {
    if (mediaData.mediaType === MediaTypeEum.image || mediaData.mediaType === MediaTypeEum.text) {
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
            <CustomAudioPlayer data={mediaData} audioUrl={mediaData.publicUrl} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} />
        )
    }
    else if (mediaData.mediaType === MediaTypeEum.video) {
        return (
            <VideoPlayer videoUrl={mediaData.publicUrl} data={mediaData} index={index} audioRefs={audioRefs} handlePlayPause={handlePlayPause} />
        )
    }
}

export default UploadedMedia