import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {Fragment, useState, useRef} from 'react';
import Slider from '@react-native-community/slider';
import { MediaTypeEum, strings, getVideoDuration } from '@sekeron/domain';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MediaAssets from '../../assets';
import CustomText from '../../common-components/custom-text/CustomText';
import styles from './LinearGradentSliderPosts.style';
import Colors from '../../resources/Colors';

const LinearGradentSliderPosts = (props: any) => {
  const {
    item,
    windowWidth,
    attchments,
    postItem,
    sliderWidth,
    sliderPosition,
    postId,
  } = props;
  const mediaHeight = item?.height * (windowWidth / item?.width);
  let videoRef: any = useRef(null);
  const navigation: any = useNavigation();
  const [overlay, setOverlay] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isPlayClicked, setIsPlayClicked] = useState(false);

  const onProgress = ({ currentTime }) => {
    setCurrentTime(currentTime);
  };

  const onVideoLoad = ({ duration }) => {
    setDuration(duration);
    setOverlay(true);
  };

  const onVideoEnd = () => {
    setIsVideoPaused(true);
    setOverlay(true);
    videoRef.seek(0);
  };

  const handlePauseButton = () => {
    setIsVideoPaused(!isVideoPaused);
    setIsPlayClicked(false);
    setOverlay(true);
  };
  const handlePlayButton = () => {
    setIsVideoPaused(!isVideoPaused);
    setIsPlayClicked(true);
    setTimeout(() => {
      setOverlay(false);
    }, 4000);
  };

  const handleVolumeButton = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const onBuffer = e => { };

  const onError = e => { };

//   const onPressViewPost = () => {
//     navigation.navigate(routes.viewPost);
//   };

  const onSlide = (slide: any) => {
    videoRef.seek(slide * duration);
    const overlayTimer: any = setTimeout(() => {
      setOverlay(true);
    }, 3000);
    clearTimeout(overlayTimer);
  };

  return (
    <Fragment>
      {item.type === MediaTypeEum.image ? (
        // aspect ratio is calculated by divding the devicewidth with imagewidth and then multiplied with the height of the image
        <View style={styles.contentContainer}>
          <Image
            style={[
              styles.mediaWidth,
              styles.imageFitMode,
            //   {
            //     height: mediaHeight > 600 ? 600 : mediaHeight,
            //   },
            {height:250}
            ]}
            source={{
              uri: item.post,
            }}
          />
        </View>
      ) : null}

      {item.type === MediaTypeEum.video ? (
        <Fragment>
          <Video
            source={{ uri: item.post }}
            muted={isVideoMuted}
            paused={isVideoPaused}
            onLoad={onVideoLoad}
            onProgress={onProgress}
            poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjXP8X0w46em9bcD8NuKKwmVDV5eVLSETdA&usqp=CAU"
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
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            {!overlay ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setOverlay(true);
                }}
                style={styles.overlayContainer}></TouchableOpacity>
            ) : (
              <Fragment>
                <View
                  style={[
                    styles.overlayContainer,
                    styles.overlayBackgroundColor,
                    styles.contentContainer,
                  ]}>
                  {!isVideoPaused ? (
                    <TouchableWithoutFeedback onPress={handlePauseButton}>
                      <Image
                        source={MediaAssets.ic_pause}
                        style={styles.videoControlIcons}
                      />
                    </TouchableWithoutFeedback>
                  ) : (
                    <TouchableWithoutFeedback onPress={handlePlayButton}>
                      <Image
                        source={MediaAssets.ic_video_play}
                        style={styles.videoControlIcons}
                      />
                    </TouchableWithoutFeedback>
                  )}
                </View>
                <View
                  style={[
                    styles.overlayBackgroundColor,
                    styles.contentContainer,
                    styles.overlayDirection,
                  ]}>
                  {!isVideoMuted ? (
                    <TouchableWithoutFeedback onPress={handleVolumeButton}>
                      <Image
                        source={MediaAssets.ic_mute}
                        style={styles.volumeIcon}
                      />
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
                    value={currentTime / duration}
                    minimumTrackTintColor={Colors.whiteColor}
                    maximumTrackTintColor={Colors.whiteColor}
                    thumbTintColor={Colors.darkBlueColor}
                    onSlidingComplete={onSlide}
                    disabled={false}
                  />
                  <Text style={styles.videoDuration}>
                    {getVideoDuration(Math.floor(currentTime))}
                  </Text>
                </View>
              </Fragment>
            )}
          </View>
        </Fragment>
      ) : null}

      {/* {attchments?.length > 1 ? (
        <TouchableOpacity
          style={[styles.viewPostBtn, styles.contentContainer]}
          onPress={() => {
            onPressViewPost();
          }}>
          <CustomText style={styles.viewPostText}>
            {strings.viewPost}
          </CustomText>
        </TouchableOpacity>
      ) : null} */}

      {sliderPosition < sliderWidth - 1 && postItem.id === postId ? (
        <View style={[styles.showPost, styles.contentContainer]}>
          <CustomText
            style={[
              styles.showPostText,
              {
                top: mediaHeight / 2 - 30,
              },
            ]}>
            {strings.showLessPosts}
          </CustomText>
        </View>
      ) : sliderPosition > sliderWidth + 1 && postItem.id === postId ? (
        <View style={[styles.showPost, styles.contentContainer]}>
          <CustomText
            style={[
              styles.showPostText,
              {
                top: mediaHeight / 2 - 30,
              },
            ]}>
            {strings.showMorePosts}
          </CustomText>
        </View>
      ) : null}
    </Fragment>
  );
};

export default LinearGradentSliderPosts;
