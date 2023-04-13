import {View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  PanGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../custom-text/CustomText';
import styles from './InterestBar.Style';
import Colors from '../../resources/Colors';
import {strings} from '@sekeron/domain';

const width = Dimensions.get('window').width - 60;
const initialPosition = width / 2;

const InterestBar = (props: any) => {
  let intialTimer: number = 5;
  const sliderKnobposition = useSharedValue(initialPosition);
  const sc = useSharedValue(1);
  const [sliderPosition, setSliderPosition] = useState<any>(initialPosition);
  const [counter, setCounter] = useState(intialTimer);

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleKnobPosition: any = (position: any): void => {
    setSliderPosition(position);
    setCounter(intialTimer);
  };

  const onClickUndoButton = (postId: any) => {
    setSliderPosition(initialPosition);
    sliderKnobposition.value = initialPosition;
    props.handleSetPostId(postId);
  };

  const slideGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = sliderKnobposition.value;
    },
    onActive: (event, ctx: any) => {
      sliderKnobposition.value =
        ctx.startX + event.translationX < 0
          ? 0
          : ctx.startX + event.translationX > width
          ? width
          : ctx.startX + event.translationX;
      runOnJS(handleKnobPosition)(sliderKnobposition.value);
      sc.value = 1.3;
    },
    onEnd: () => {
      runOnJS(props.setSliderPosition)(sliderKnobposition.value);
      sc.value = 1;
    },
  });

  const trackBarStyle = useAnimatedStyle((): any => {
    const sliderTrackbarStyle = {
      height: 2,
      width: Math.abs(sliderPosition - initialPosition),
      position: 'absolute',
      left: initialPosition,
    };

    if (sliderPosition < initialPosition) {
      sliderTrackbarStyle.left = Math.abs(sliderPosition);
    }

    return sliderTrackbarStyle;
  });

  const sliderKnobStyle = useAnimatedStyle((): any => {
    const sliderKnobStyle = {
      marginTop: -9,
      marginLeft: -8,
      zIndex: 999,
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: Colors.nonaryGreyColor,
      borderColor: Colors.blackPearlColor,
      transform: [{translateX: sliderPosition}, {scale: sc.value}],
      borderWidth: 1,
    };
    if (sliderPosition < initialPosition - 1) {
      (sliderKnobStyle.backgroundColor = Colors.primaryGradientRedColor),
        (sliderKnobStyle.borderWidth = 0);
    } else if (sliderPosition > initialPosition + 1) {
      (sliderKnobStyle.backgroundColor = Colors.primaryGradientLightGreenColor),
        (sliderKnobStyle.borderWidth = 0);
    }
    return sliderKnobStyle;
  });

  return (
    <View style={styles.container}>
      <View style={styles.trackBar} />

      <Animated.View style={trackBarStyle}>
        {sliderPosition < initialPosition ? (
          <LinearGradient
            colors={[
              Colors.primaryGradientRedColor,
              Colors.secondaryGradientRedColor,
            ]}
            style={[
              {
                width: Math.abs(sliderKnobposition.value - initialPosition),
              },
              styles.gradientTrackbarStyle,
            ]}
            start={{x: 0.25, y: 0}}
            end={{x: 1, y: 0}}
          />
        ) : sliderPosition > initialPosition ? (
          <LinearGradient
            colors={[
              Colors.primaryGradientLightGreenColor,
              Colors.secondaryGradientLightGreenColor,
            ]}
            style={[
              {
                width: Math.abs(sliderKnobposition.value - initialPosition),
              },
              styles.gradientTrackbarStyle,
            ]}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
          />
        ) : null}
      </Animated.View>

      <PanGestureHandler onGestureEvent={slideGestureHandler}>
        <Animated.View
          style={sliderKnobStyle}
          onTouchMove={() => {
            props.handleSetPostId(props?.item?.id);
          }}></Animated.View>
      </PanGestureHandler>

      {sliderPosition < initialPosition - 1 && counter !== 0 ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            onClickUndoButton(props?.item?.postId);
          }}
          style={styles.undoBtnContainer}>
          <CustomText style={styles.undoText}>
            {strings.undo}({counter})
          </CustomText>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InterestBar;
