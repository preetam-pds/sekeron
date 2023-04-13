import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../resources/Colors';
import CustomText from '../custom-text/CustomText';
import {styles} from './CustomCommonButton.Style';

const CustomCommonButton = (props: any) => {
  const {
    name,
    disabled,
    isHorizontalLeftCurved,
    done,
    onPress,
    DarkGreyButton,
    greyOutlinedButton,
    islessRadius,
    smallWidth,
  } = props;

  /*
    here in CustomCommonButton we have 4 types of button As of now
      1. CustomLinearGradientButton 
      which as 3 props :-
        1. isHorizontalLeftCurved will Horizontal Left Curved
        2. islessRadius  will have small borderRadius
        3. Default button

      2.CustomNormalButton 
      this button is for grey outlined button with Horizontal Left Curved

      3. CustomGreyOutlinedButton
      with as 2 props :-
        1. this button is smallWidth
        2. this button is for grey outlined button with normal BorderRadius
      
      4. CustomGreyButton
        it as '#2c2c2c' background color button
  */

  const CustomLinearGradientButton = (props: any) => {
    const {textToDisplay} = props;

    return (
      <TouchableOpacity {...props} onPress={onPress}>
        <View {...props} style={styles.container}>
          <LinearGradient
            {...props}
            pointerEvents="none"
            colors={[Colors.primaryBlueColor, Colors.tertiaryBlueColor]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={
              isHorizontalLeftCurved
                ? styles.linearGradientIsHorizontalLeftCurved
                : islessRadius
                ? styles.linearlessRadiusGradient
                : styles.linearGradient
            }>
            <CustomText style={styles.buttonText}>{textToDisplay}</CustomText>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };
  const CustomNormalButton = (props: any) => {
    const {textToDisplay, onPress} = props;

    return (
      <TouchableOpacity
        {...props}
        onPress={onPress}
        style={
          textToDisplay?.length > 8
            ? styles.disableButtonFollowingText
            : styles.disableButtonText
        }>
        <CustomText style={styles.buttonTextGrey}>{textToDisplay}</CustomText>
      </TouchableOpacity>
    );
  };

  const CustomGreyOutlinedButton = (props: any) => {
    const {textToDisplay, onPress} = props;

    return (
      <TouchableOpacity
        {...props}
        onPress={onPress}
        style={
          smallWidth
            ? styles.geryOutlinedSmallButtonText
            : styles.geryOutlinedButtonText
        }>
        <CustomText style={styles.buttonTextGrey}>{textToDisplay}</CustomText>
      </TouchableOpacity>
    );
  };

  const CustomGreyButton = (props: any) => {
    const {textToDisplay, onPress} = props;

    return (
      <TouchableOpacity {...props} onPress={onPress}>
        <View {...props} style={styles.container}>
          <LinearGradient
            {...props}
            pointerEvents="none"
            colors={[
              Colors.tertiaryDarkCementColor,
              Colors.tertiaryDarkCementColor,
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.darkGreyButtonText}>
            <CustomText style={styles.buttonText}>{textToDisplay}</CustomText>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {done && done ? (
        <CustomNormalButton
          textToDisplay={name}
          disabled={disabled}
          onPress={onPress}
        />
      ) : DarkGreyButton ? (
        <CustomGreyButton
          textToDisplay={name}
          disabled={disabled}
          onPress={onPress}
        />
      ) : greyOutlinedButton ? (
        <CustomGreyOutlinedButton
          textToDisplay={name}
          disabled={disabled}
          onPress={onPress}
        />
      ) : (
        <CustomLinearGradientButton textToDisplay={name} disabled={disabled} />
      )}
    </View>
  );
};

export default CustomCommonButton;
