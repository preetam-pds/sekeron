import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../resources/Colors';
import CustomText from '../custom-text/CustomText';
import styles from './CommonButton.Style';
import GradientText from '../gradient-text/GradientText';

// interface ICommonButtonProps {
//   IsStyleChanged: boolean;
//   title: string;
//   isDetailsCompleted: boolean;
//   isSetPasswordCompleted: boolean;
//   setIsDetailsCompleted: any;
//   setPasswordCompleted: any;
//   setIsPassword: any;
//   setIsDetails: any;
//   setIsProfile: any;
//   isDetails: boolean;
//   isSetPassword: boolean;
//   isProfile: boolean;
//   setIsProfileCreated: any;
//   isProfileCreated: boolean;
//   phoneNumber: string;
//   FullName: string;
//   isName: boolean;
//   isPhNumberValid: boolean;
//   setValue: any;
//   value:any;
//   otp:any
// }

const CommonButton = (props: any) => {
  return (
    <>
      {props?.applyGradient ? (
        <TouchableOpacity {...props}>
          <LinearGradient
            colors={[Colors.primaryBlueColor, '#4fd8cc']}
            start={{x: 0, y: 0.75}}
            end={{x: 1, y: 0.25}}
            style={[
              styles.stayButton,
              props?.userInformation
                ? styles.userInfoButtonWidth
                : styles.buttonWidth,
            ]}>
            {props.isBorderGradientEnabled ? (
              <View style={styles.borderGradient}>
                <GradientText style={styles.gradientText}>{props.title}</GradientText>
              </View>
            ) : (
              <CustomText style={styles.stayText}>{props.title}</CustomText>
            )}
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity {...props} disabled={props.disabled}>
          <View style={props.showBorder ? styles.showBorder : {}}>
            <CustomText
              style={
                props.showBorder
                  ? {...styles.cancelText, ...styles.cancelTextNew}
                  : styles.cancelText
              }>
              {props.title}
            </CustomText>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CommonButton;
