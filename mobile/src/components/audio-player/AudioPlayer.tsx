import { Fragment, memo, useRef, useState } from 'react';
import { View } from 'react-native';
import React from 'react';
import { CreatePostRedux } from '@sekeron/domain';
import { useDispatch, useSelector } from 'react-redux';
import AudioComponent from './AudioComponent';
import AudioControls from './AudioControls';

const AudioPlayerComponent = ({
  playerContainerStyle,
  playerTrackStyle,
  height,
  media,
  showMuteicon,
  isPreview,
  url,
  setMedia,
  isReOrder,
  setReorderMedia
}:any) => {
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });
  const {setCreatePostState} = actionDispatch(useDispatch());
  let videoRef: any = useRef<any>(null);
  const createPostState = useSelector((state: any) => state.CreatePostRedux);
  const sliderRef = useRef<any>(null);
  const [duration, setDuration] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const onSliderValueChange = (value: number) => {
    videoRef.seek(value);
  };

  const onVideoLoad = (data: any) => {
    setDuration(data?.duration);
  };

  const onProgress = (data: any, id, url) => {
    sliderRef.current.setNativeProps({ value: data.currentTime });
    const mediaContent = createPostState.postDetails.mediaContent.map(
      (item: any) => {
        if(id === item.id) {
          return {...item, currentTime: data.currentTime};
        } else {
          return {...item};
        }
      }
    );
    let postDetails;
    postDetails = {
      ...createPostState.postDetails,
      mediaContent,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });

    if(isPreview) {
      setMedia({
        ...media,
        currentTime: data.currentTime
      })
    }

    if(isReOrder) {
      setReorderMedia(mediaContent)
    }
  };

  const onVideoEnd = (video) => {
    const mediaContent = createPostState.postDetails.mediaContent.map(
      (item: any) => {
        return {...item, isPlaying: false, currentTime: 0};
      },
    );
    let postDetails;
    postDetails = {
      ...createPostState.postDetails,
      mediaContent,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });

    if(isReOrder) {
      setReorderMedia(mediaContent)
    }

    if(isPreview) {
      setMedia({
       ...media,
       isPlaying: false,
       currentTime: 0
      })
    }

    videoRef.seek(0);
    sliderRef.current.setNativeProps({ value: 0 });
  };

  const handleVolumeButton = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const handlePlayVideo = (video: any) => {
    const mediaContent = createPostState.postDetails.mediaContent.map(
      (item: any) =>
        item.id === video.id
          ? {...item, isPlaying: true}
          : {...item, isPlaying: false},
    );
    let postDetails;
    postDetails = {
      ...createPostState.postDetails,
      mediaContent,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });

    if(isReOrder) {
      setReorderMedia(mediaContent)
    }

    if(isPreview) {
      setMedia({
       ...media,
       isPlaying: true
      })
    }
  };
  const handlePauseVideo = (video: any) => {
    const mediaContent = createPostState.postDetails.mediaContent.map(
      (item: any) =>
        item.id === video.id
          ? {...item, isPlaying: false}
          : {...item, isPlaying: false},
    );
    let postDetails;
    postDetails = {
      ...createPostState.postDetails,
      mediaContent,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });

    if(isReOrder) {
      setReorderMedia(mediaContent)
    }

     if(isPreview) {
      setMedia({
       ...media,
       isPlaying: false
      })
    }
  };

  const onBuffer = e => {};

  const onError = e => {};

  return (
    <Fragment>
      <View style={{position: 'relative'}}>
        {Object.keys(media).length === 0 && media.constructor === Object ? null :
        <AudioComponent 
        source={{uri: media?.publicUrl}}
        isVideoMuted={isVideoMuted}
        paused={!media?.isPlaying}
        onVideoLoad={onVideoLoad}
        memoizedHandleProgress={onProgress}
        videoRef={(ref:any) => {
          videoRef = ref
        }}
        onVideoEnd={onVideoEnd}
        onBuffer={onBuffer}
        onError={onError}
        height={height}
        media={media}
        />
}
      </View>
        <View
          style={playerContainerStyle}>
            <AudioControls 
            showMuteicon={showMuteicon}
            isVideoMuted={isVideoMuted}
            handleVolumeButton={handleVolumeButton}
            isPlaying={media.isPlaying}
            handlePauseVideo={handlePauseVideo}
            handlePlayVideo={handlePlayVideo}
            duration={duration}
            sliderRef={sliderRef}
            onSliderValueChange={onSliderValueChange}
            media={media}/>
        </View>
    </Fragment>
  );
}

export default memo(AudioPlayerComponent);
