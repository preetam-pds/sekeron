import Slider from '@react-native-community/slider';
import {getVideoDuration} from '@sekeron/domain';
import React, {Fragment} from 'react';
import {memo} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
} from 'react-native';
import MediaAssets from '../../assets';
import Colors from '../../resources/Colors';
import styles from './AudioPlayer.Style';

const AudioControls = props => {
  return (
    <Fragment>
      <View
        style={styles.controlContainer}>
        {props.showMuteicon ? (
          <View style={{marginRight: 10}}>
            <TouchableWithoutFeedback
              onPress={
                !props.isVideoMuted
                  ? props.handleVolumeButton
                  : props.handleVolumeButton
              }>
              <Image
                source={
                  !props.isVideoMuted
                    ? MediaAssets.ic_mute
                    : MediaAssets.ic_unmute
                }
                style={styles.volumeIcon}
              />
            </TouchableWithoutFeedback>
          </View>
        ) : null}
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              props.isPlaying
                ? props.handlePauseVideo(props.media)
                : props.handlePlayVideo(props.media);
            }}>
            <Image
              source={
                props.isPlaying ? MediaAssets.ic_pause : MediaAssets.ic_play
              }
              style={styles.volumeIcon}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{width: '70%'}}>
          <Slider
            style={{width: '100%'}}
            minimumValue={0}
            maximumValue={props.duration}
            ref={props.sliderRef}
            onSlidingComplete={props.onSliderValueChange}
            minimumTrackTintColor={Colors.whiteColor}
            maximumTrackTintColor={Colors.primarygreyishColor}
            thumbTintColor={Colors.darkBlueColor}
            disabled={false}
          />
        </View>
        <View>
          <Text style={styles.videoDuration}>
            {getVideoDuration(Math.floor(props.media.currentTime))}
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default memo(AudioControls);