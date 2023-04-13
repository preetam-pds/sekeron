import React, {Fragment, useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import MediaAssets from '../../assets';
import {strings, constants} from '@sekeron/domain';
import otpInputStyles from './OtpInput.style';
import CustomText from '../../common-components/custom-text/CustomText';
import {Text} from '@rneui/themed';

const OtpInput = (otpProps: any) => {
  let intialTimer: number = constants.otpTimer;
  let value: any;
  const [counter, setCounter] = useState(intialTimer);
  const ref = useBlurOnFulfill({value, cellCount: 4});

  const resendOtp = () => {
    otpProps.setOtpValue('');
    setCounter(intialTimer);
  };

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View
      style={[
        otpInputStyles.container,
        otpProps.isRegistration || otpProps.isLogin
          ? otpInputStyles.registrationContainerMargin
          : otpInputStyles.userDetailsContainerMargin,
      ]}>
      <View>
        {otpProps?.isUserInfo ? (
          <CustomText
            style={[otpInputStyles.name, otpInputStyles.enterTheCodeText]}>
            {otpProps.fullName} {strings.thatsGreatName}
          </CustomText>
        ) : null}
        <CustomText
          style={[
            otpInputStyles.instructions,
            otpInputStyles.enterTheCodeText,
          ]}>
          {strings.enterTheCodeSentTo}
        </CustomText>

        <View style={otpInputStyles.instructionsContainer}>
          <CustomText style={otpInputStyles.instructions}>
            {otpProps.isMobileNumberVerified
              ? strings.phoneNumber
              : otpProps?.inputValue}
          </CustomText>

          <TouchableOpacity
            style={[
              otpInputStyles.instructionsContainer,
              otpInputStyles.editBtn,
            ]}>
            <Image
              source={MediaAssets.ic_pencilmark}
              style={otpInputStyles.editIcon}
            />
            <CustomText
              onPress={() => {
                otpProps.handleEditButton();
              }}
              style={otpInputStyles.editText}>
              {strings.edit}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <CodeField
        ref={ref}
        value={otpProps?.otpValue}
        onChangeText={(value: any) => {
          console.log('rrrr', value);

          otpProps.handleOnOtpChange(value);
        }}
        cellCount={4}
        rootStyle={otpInputStyles.otpInput}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <CustomText
            key={index}
            style={[
              otpInputStyles.otpCell,
              otpProps?.otpValue.length === 4 || isFocused
                ? otpInputStyles.focusCell
                : otpInputStyles.emptyOtpCell,
            ]}>
            {symbol ||
              (isFocused ? (
                <Cursor />
              ) : (
                <Text style={otpInputStyles.dash}> - </Text>
              ))}
          </CustomText>
        )}
      />

      <View style={otpInputStyles.resendOtpContainer}>
        {counter !== 0 ? (
          <Fragment>
            {counter <= 9 ? (
              <CustomText style={otpInputStyles.resendText}>
                {strings.resendOtpIn} 0:0{counter}
              </CustomText>
            ) : (
              <CustomText style={otpInputStyles.resendText}>
                {strings.resendOtpIn} 0:{counter}
              </CustomText>
            )}
          </Fragment>
        ) : (
          <CustomText style={otpInputStyles.resendOtp} onPress={resendOtp}>
            {strings.resendOtp}
          </CustomText>
        )}
        {otpProps?.isLoginPage ? (
          <View style={otpInputStyles.sendTextHolder}>
            <View>
              <CustomText style={otpInputStyles.orText}>
                {' '}
                {strings.or}
              </CustomText>
            </View>

            <View style={otpInputStyles.sendCodeText}>
              <CustomText
                style={otpInputStyles.sendText}
                onPress={() => {
                  resendOtp();
                  otpProps.handleMobileNumberVerification();
                }}>
                {strings.sendCode} {''}
                {otpProps.isMobileNumberVerified
                  ? otpProps?.inputValue
                  : strings.phoneNumber}
              </CustomText>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default OtpInput;
