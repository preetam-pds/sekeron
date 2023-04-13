import React, {memo, useEffect, useRef, useState} from 'react';
import {Fragment} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video from 'react-native-video';
import MediaAssets from '../../assets';
import {CreatePostRedux, getVideoDuration} from '@sekeron/domain';
import Colors from '../../resources/Colors';
import styles from './VideoPlayer.Style';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';

const VideoPlayerComponent = ({
  url,
  isPlaying,
  id,
  isSelectedCreatePost,
  isVideoPaused,
  setIsVideoPaused,
  mediaHeight,
}) => {
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });
  const {setCreatePostState} = actionDispatch(useDispatch());
  let videoRef: any = useRef<any>(null);
  const createPostState = useSelector((state: any) => state.CreatePostRedux);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isEmptyAreaClicked, setIsEmptyAreaClicked] = useState(false);

  const onSliderValueChange = (value: number) => {
    videoRef.seek(value);
  };

  const onVideoLoad = (data: any) => {
    setDuration(data.duration);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  useEffect(() => {
    if (isVideoPaused) {
      setShowControls(true);
    } else {
      setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  }, [isVideoPaused]);

  useEffect(() => {
    if (isVideoPaused) {
      setShowControls(true);
    } else {
      setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  }, [isEmptyAreaClicked]);

  const onVideoEnd = () => {
    if (isSelectedCreatePost) {
      const mediaContent = createPostState.postDetails.mediaContent.map(
        (item: any) => {
          return {...item, isPlaying: false};
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
    }
    setIsVideoPaused(true);
    setShowControls(true);
    videoRef.seek(0);
  };

  const handleVolumeButton = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const handlePlayVideo = (id: string) => {
    if (isSelectedCreatePost) {
      const mediaContent = createPostState.postDetails.mediaContent.map(
        (item: any) =>
          item.id === id
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
    }
    setIsVideoPaused(false);
  };
  const handlePauseVideo = (id: string) => {
    if (isSelectedCreatePost) {
      const mediaContent = createPostState.postDetails.mediaContent.map(
        (item: any) =>
          item.id === id
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
    }
    setIsVideoPaused(true);
  };

  const onBuffer = e => {
    console.log(e, 'onBuffer');
  };

  const onError = e => {
    console.log(e, 'onError');
  };

  const handleShowControls = () => {
    if (showControls) {
      return (
        <Fragment>
          <View style={[styles.contentContainer, styles.overlayContainer]}>
            {(isSelectedCreatePost && isPlaying) ||
            (!isSelectedCreatePost && !isVideoPaused) ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  handlePauseVideo(id);
                  setIsVideoPaused(true);
                }}>
                <Image
                  source={MediaAssets.ic_pause}
                  style={styles.videoControlIcons}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => {
                  handlePlayVideo(id);
                  setIsVideoPaused(false);
                }}>
                <Image
                  source={MediaAssets.ic_video_play}
                  style={styles.videoControlIcons}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
          <View style={[styles.contentContainer, styles.controls]}>
            {!isVideoMuted ? (
              <TouchableWithoutFeedback onPress={handleVolumeButton}>
                <Image source={MediaAssets.ic_mute} style={styles.volumeIcon} />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={handleVolumeButton}>
                <Image
                  source={MediaAssets.ic_unmute}
                  style={styles.volumeIcon}
                />
              </TouchableWithoutFeedback>
            )}
            <Slider
              style={styles.sliderStyle}
              minimumValue={0}
              value={currentTime ? currentTime : 0}
              maximumValue={duration}
              onSlidingComplete={onSliderValueChange}
              thumbStyle={styles.sliderThumbStyle}
              minimumTrackTintColor={Colors.whiteColor}
              maximumTrackTintColor={Colors.primarygreyishColor}
              thumbTintColor={Colors.darkBlueColor}
              disabled={false}
            />
            <Text style={styles.videoDuration}>
              {getVideoDuration(Math.floor(currentTime))}
            </Text>
          </View>
        </Fragment>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <View>
        <Video
          source={{uri: url}}
          resizeMode="cover"
          muted={isVideoMuted}
          paused={isSelectedCreatePost ? !isPlaying : isVideoPaused}
          onLoad={onVideoLoad}
          onProgress={onProgress}
          poster={url}
          ref={(ref: any) => {
            videoRef = ref;
          }}
          onEnd={onVideoEnd}
          onBuffer={onBuffer}
          onError={onError}
          style={[
            styles.mediaWidth,
            {
              height: mediaHeight > 500 ? 600 : mediaHeight,
            },
          ]}
        />
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsEmptyAreaClicked(true);
          setShowControls(true);
        }}>
        <View
          style={[
            styles.overlay,
            {
              height: mediaHeight > 500 ? 600 : mediaHeight,
            },
          ]}>
          {handleShowControls()}
        </View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
};

export default memo(VideoPlayerComponent);
