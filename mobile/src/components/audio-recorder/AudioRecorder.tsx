import {CreatePostRedux, MediaTypeEum, PlatformEnum, strings} from '@sekeron/domain';
import React, {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Image,
  PanResponder,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  OutputFormatAndroidType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useDispatch, useSelector} from 'react-redux';
import MediaAssets from '../../assets';
import CustomText from '../../common-components/custom-text/CustomText';
import Colors from '../../resources/Colors';
import AudioPlayerComponent from '../audio-player/AudioPlayer';
import styles from './AudioRecorder.Style';
import uuid from 'react-native-uuid';

let audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.1);
let playTime;

const AudioRecorderComponent = () => {
  const HEIGHT = 160;
  const [isRecording, setIsRecording] = useState(false);
  const [recordingPath, setRecordingPath] = useState<any>(null);
  const [recordSeconds, setRecordSeconds] = useState('');
  const [isStopped, setIsStopped] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [timeLeft, setTimeLeft] = useState<any>(null);
  const [showCancelText, setShowCancelText] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isStoppedAndLocked, setIsStoppedAndLocked] = useState(false);
  const micPanHandler = useRef(new Animated.ValueXY()).current;
  const micPulseAnim = useRef(new Animated.Value(1));
  const lockPulseAnim = useRef(new Animated.Value(0));
  const [lockIconMoveUpAnim] = useState(new Animated.Value(0));
  const [lockIconHeightAnim, setLockIconHeightAnim] = useState(HEIGHT);
  const [slideToCancelAnim] = useState(new Animated.Value(1));
  const [arrowUpAnim] = useState(new Animated.Value(1));
  const recordingPulseAnim = useRef(new Animated.Value(1));
  const [recordingOpacityAnim] = useState(new Animated.Value(1));
  const [media, setMedia] = useState<any>({});

  const path = Platform.select({
    ios: undefined,
    android: undefined,
  });

  const reset = () => {
    setRecordSeconds('');
    setIsLocked(false);
    setShowCancelText(false);
    lockIconMoveUpAnim.setValue(0);
    setLockIconHeightAnim(HEIGHT);
    setIsStoppedAndLocked(false);
    recordingOpacityAnim.setValue(1);
    arrowUpAnim.setValue(1);
  };

  const handleDelete = () => {
    stopRecording();
    setIsStopped(false);
    reset();
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
      setShowTooltip(false);
    }
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      return setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(lockPulseAnim.current, {
          toValue: 5,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(lockPulseAnim.current, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [isRecording]);

  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });

  const {setCreatePostState} = actionDispatch(useDispatch());
  const createPostState = useSelector((state: any) => state.CreatePostRedux);

  const moveupAnim = useCallback(
    (dy: any) => {
      const height = Math.abs(HEIGHT + (dy / 100) * HEIGHT);
      const shrinkedHeight = HEIGHT - height;
      Animated.timing(lockIconMoveUpAnim, {
        toValue: dy - shrinkedHeight,
        duration: 0,
        useNativeDriver: true,
      }).start();
      const opacity = Math.abs(dy / -60 - 1);
      Animated.timing(arrowUpAnim, {
        toValue: opacity,
        duration: 0,
        useNativeDriver: true,
      }).start();

      setLockIconHeightAnim(height);
    },
    [lockIconMoveUpAnim],
  );

  const startRecording = async () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(micPulseAnim.current, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(micPulseAnim.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(recordingPulseAnim.current, {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(recordingPulseAnim.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(recordingOpacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(recordingOpacityAnim, {
          toValue: 0.1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
      OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };
    setIsRecording(true);
    setIsLocked(false);
    setShowCancelText(true);
    await audioRecorderPlayer.setSubscriptionDuration(0.5);
    await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      playTime = e.currentPosition;
      setRecordSeconds(
        new Date(e.currentPosition).toISOString().substring(14, 19),
      );
    });
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecordingPath(null);
      audioRecorderPlayer.removeRecordBackListener();
    } catch (error) {
      setShowTooltip(true);
      setTimeLeft(500);
    }
    setIsRecording(false);
  };

  const handleSlideToCancel = async () => {
    stopRecording();
    reset();
  };

  const stopRecordingWithPreview = async () => {
    setIsRecording(false);
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecordingPath(result);
      setMedia({
        id: uuid.v4(),
        publicUrl: result,
        isPlaying: false,
        currentTime: 0,
      });
      if (playTime > 1500) {
        setIsStopped(true);
      } else {
        if (!isLocked) {
          setShowTooltip(true);
          setTimeLeft(500);
          setIsStopped(false);
        }
      }
    } catch (error) {
      setShowTooltip(true);
      setTimeLeft(500);
    }
  };

  const handleSwipeUpToLock = () => {
    setIsLocked(true);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        setTimeLeft(null);
        setShowTooltip(false);
        startRecording();
        slideToCancelAnim.setValue(1);
      },

      onPanResponderMove: (e, gestureState) => {
        // limit move right and move down
        if (
          (gestureState.dy > 0 && gestureState.dx > 0) ||
          (gestureState.dy === 0 && gestureState.dx > 0)
        ) {
          return null;
        }

        //Move left
        if (
          (gestureState.dy > 0 && gestureState.dx < 0) ||
          (gestureState.dx < 0 && gestureState.dy === 0) ||
          (gestureState.dx < 0 &&
            Math.abs(gestureState.dy) < Math.abs(gestureState.dx))
        ) {
          const dy = new Animated.Value(0);
          if (gestureState.dx > -80) {
            const opacity = Math.abs(gestureState.dx / -80 - 1);
            Animated.timing(slideToCancelAnim, {
              toValue: opacity,
              duration: 0,
              useNativeDriver: true,
            }).start();
          }

          if (gestureState.dx < -80) {
            handleSlideToCancel();
            return Animated.spring(micPanHandler, {
              toValue: {x: 0, y: 0},
              useNativeDriver: true,
            }).start(() => {
              micPanHandler.setValue({x: 0, y: 0});
            });
          }

          return Animated.event(
            [
              null,
              {
                dx: micPanHandler.x,
                dy: dy,
              },
            ],
            {
              useNativeDriver: false,
            },
          )(e, gestureState);
        }

        // move up
        if (
          (gestureState.dx > 0 && gestureState.dy < 0) ||
          (gestureState.dy < 0 && gestureState.dx === 0) ||
          (gestureState.dy < 0 &&
            Math.abs(gestureState.dx) < Math.abs(gestureState.dy))
        ) {
          const dx = new Animated.Value(0);
          if (gestureState.dy < -15) {
            setShowCancelText(false);
          }

          if (gestureState.dy > -60) {
            moveupAnim(gestureState.dy);
          }
          if (gestureState.dy < -100) {
            return Animated.spring(micPanHandler, {
              toValue: {x: 0, y: 0},
              useNativeDriver: true,
            }).start(() => {
              handleSwipeUpToLock();
              micPanHandler.setValue({x: 0, y: 0});
            });
          }
          return Animated.event(
            [
              null,
              {
                dx: dx,
                dy: micPanHandler.y,
              },
            ],
            {
              useNativeDriver: false,
            },
          )(e, gestureState);
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(micPanHandler, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },

      onPanResponderEnd: (e, gestureState) => {
        if (Math.abs(gestureState.dy) < 70 && Math.abs(gestureState.dx) < 70) {
          stopRecordingWithPreview();
          micPanHandler.setValue({x: 0, y: 0});
        } else {
          setIsStopped(false);
        }
      },
    }),
  ).current;

  const handleUpload = (result?) => {
    let postDetails;
    const data = [...createPostState.postDetails.mediaContent];
    data.push({
      type: MediaTypeEum.audio,
      publicUrl: result ? result : recordingPath,
      isPlaying: false,
      id: uuid.v4(),
      currentTime: 0,
    });
    postDetails = {
      ...createPostState.postDetails,
      mediaContent: data,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });
  };

  const renderLockIcon = () => {
    if (isRecording && !isLocked) {
      return (
        <Animated.View
          style={{
            ...styles.LockIconContainer,
            height: lockIconHeightAnim,
            transform: [{translateY: lockIconMoveUpAnim}],
          }}>
          <Animated.Image
            style={{
              ...styles.lockIcon,
              transform: [{translateY: lockPulseAnim.current}],
            }}
            source={MediaAssets.ic_lock}
          />
          <Animated.Image
            style={{
              ...styles.arrowUpIcon,
              opacity: arrowUpAnim,
              transform: [{translateY: lockPulseAnim.current}],
            }}
            source={MediaAssets.ic_arrow_up}
          />
        </Animated.View>
      );
    } else {
      return null;
    }
  };
  const renderSlideToCancel = () => {
    if (isRecording) {
      return (
        <Animated.View
          style={{
            ...styles.slideToCancelContainer,
            opacity: showCancelText ? slideToCancelAnim : 0,
          }}>
          <Image
            style={styles.arrowIcon}
            source={MediaAssets.ic_grey_left_arrow}
          />

          <Text style={styles.slideToCancelText}>{strings.slideToCancel}</Text>
        </Animated.View>
      );
    } else {
      return null;
    }
  };

  const renderHoldToRecord = () => {
    if (isRecording) {
      return (
        <View style={styles.holdToRecordContainer}>
          <Animated.View style={{transform: [{scale: micPulseAnim.current}]}}>
            <Image
              style={styles.micIcon}
              source={MediaAssets.ic_recording_icon}
            />
          </Animated.View>
          <Text style={styles.recordSecondsText}>{recordSeconds}</Text>
        </View>
      );
    } else {
      return (
        <Text style={styles.holdToRecordText}>{strings.tapHoldToRecord}</Text>
      );
    }
  };
  const renderRecorder = () => {
    return (
      <Fragment>
        {renderLockIcon()}
        <View style={{...styles.recorderContainer, opacity: isLocked ? 0 : 1}}>
          {renderHoldToRecord()}
          <Tooltip
            isVisible={showTooltip}
            contentStyle={{backgroundColor: Colors.senaryGreyColor}}
            childContentSpacing={4}
            arrowStyle={styles.toolTipArrow}
            backgroundColor={Colors.transparentColor}
            content={
              <View>
                <CustomText style={styles.ToolTipText}>
                  {strings.holdToRecordReleaseToStop}
                </CustomText>
              </View>
            }
            onClose={() => {
              setShowTooltip(false);
            }}
            placement="top">
            <Animated.View
              style={[
                {
                  width: isRecording ? 200 : 40,
                  height: 40,
                  transform: [
                    {translateX: micPanHandler.x},
                    {translateY: micPanHandler.y},
                  ],
                },
              ]}
              {...panResponder.panHandlers}>
              <View style={styles.micIconContainer}>
                <View style={{flexDirection: 'row'}}>
                  {renderSlideToCancel()}
                  <Image
                    style={
                      isRecording
                        ? {
                            ...styles.micIcon,
                            transform: [{scaleY: 1.7}, {scaleX: 1.7}],
                          }
                        : styles.micIcon
                    }
                    source={
                      isRecording
                        ? MediaAssets.ic_mic_big
                        : MediaAssets.ic_recorder_icon
                    }
                  />
                </View>
              </View>
            </Animated.View>
          </Tooltip>
        </View>
      </Fragment>
    );
  };

  const renderRecordedPreview = () => {
    return (
      <View style={styles.recordedPreviewContainer}>
        {isLocked && !isStoppedAndLocked ? (
          <View style={styles.recordSecondsContainer}>
            <Text style={styles.recordSecondsText}>{recordSeconds}</Text>
            <Animated.View
              style={{
                ...styles.recordingTextView,
                transform: [{scale: recordingPulseAnim.current}],
                opacity: recordingOpacityAnim,
              }}>
              <Animated.Text
                style={styles.recordingText}>
                {strings.recording}
              </Animated.Text>
            </Animated.View>
          </View>
        ) : (
          <AudioPlayerComponent
            playerContainerStyle={styles.playerContainerStyle}
            playerTrackStyle={styles.playerTrackStyle}
            showMuteicon={false}
            url={recordingPath}
            media={media}
            isPreview={true}
            setMedia={setMedia}
          />
        )}
        <View style={styles.CTAButtonsContainer}>
          <TouchableOpacity onPress={() => handleDelete()}>
            <Image
              style={styles.deleteIcon}
              source={MediaAssets.ic_red_delete_icon}
            />
          </TouchableOpacity>
          {isLocked && !isStoppedAndLocked ? (
            <TouchableOpacity
              onPress={() => {
                setIsStoppedAndLocked(true);
                stopRecordingWithPreview();
              }}>
              <Image
                style={styles.stopIcon}
                source={MediaAssets.ic_stop_recording}
              />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            onPress={async () => {
              if (recordingPath === null) {
                const result = await audioRecorderPlayer.stopRecorder();
                setRecordingPath(result);
                handleUpload(result);
              } else {
                handleUpload();
              }
              setIsRecording(false);
              reset();
              setIsStopped(false);
            }}>
            <Image
              style={styles.uploadIcon}
              source={MediaAssets.ic_recorded_upload}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const render = () => {
    if (isStopped || isLocked) {
      return renderRecordedPreview();
    } else {
      return renderRecorder();
    }
  };

  return <Fragment>{render()}</Fragment>;
};

export default memo(AudioRecorderComponent);
