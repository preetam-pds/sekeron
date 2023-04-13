import {View, Image, SafeAreaView, ScrollView} from 'react-native';
import React, {Fragment, useState} from 'react';
import InputField from '../../../common-components/input-field/InputField';
import CommonButton from '../../../common-components/common-button/CommonButton';
import MediaAssets from '../../../assets';
import Colors from '../../../resources/Colors';
import loginStyles from './Login.Style';
import {ValidationUtils, strings, constants, loginRedux} from '@sekeron/domain';
import OtpInput from '../OtpInput';
import CustomText from '../../../common-components/custom-text/CustomText';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

const dispatchAction = (dispatch: Dispatch<any>) => ({
  setLogin: (data: any) => dispatch(loginRedux.actions.setLoginState(data)),
});

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isMobileNumberVerified, setIsMobileNumberVerified] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigation: any = useNavigation();
  const {setLogin} = dispatchAction(useDispatch());

  //move this utils file
  const handleChange = (email: any) => {
    setEmail(email);
  };
  const onBlur = () => {
    setCheckValidEmail(true);
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const handleVerifyEmailButton = () => {
    setIsEmailVerified(true);
  };

  const handleVerifyOtpButton = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', constants.loginToken);
      setLogin({key: 'isTokenSet', value: true});
    } catch (error: any) {
      console.log(error, 'error');
    }
  };

  const handleOnOtpChange = (otp: any) => {
    if (ValidationUtils.isOtpValid(otp)) {
      setOtpValue(otp);
    }
  };

  const handleEditButton = () => {
    setIsEmailVerified(false);
  };

  const handleMobileNumberVerification = () => {
    setIsMobileNumberVerified(!isMobileNumberVerified);
  };

  return (
    <Fragment>
      <SafeAreaView
        style={[loginStyles.contentContainer, loginStyles.container]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={loginStyles.contentContainerStyle}>
          <View
            style={[
              loginStyles.contentContainerStyle,
              loginStyles.sekeronLogoContainer,
            ]}>
            <Image
              style={loginStyles.sekeronLogoImage}
              source={MediaAssets.ic_sekeron}
            />
          </View>
          {!isEmailVerified ? (
            <Fragment>
              <View
                style={[
                  loginStyles.contentContainerStyle,
                  loginStyles.emailInputFieldContainer,
                ]}>
                <InputField
                  value={email}
                  label={strings.enterEmailOrUserName}
                  placeholderTextColor={Colors.whiteColor}
                  handleChange={handleChange}
                  checkValidInput={checkValidEmail}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  isEmailTextnput={true}
                  errorMsg={strings.pleaseEnterEmail}
                  style={[
                    loginStyles.input,
                    checkValidEmail
                      ? isFocused
                        ? loginStyles.focusedInput
                        : loginStyles.validInput
                      : loginStyles.inValidInput,
                  ]}
                  inputStyle={loginStyles.inputStyle}
                  labelStyle={loginStyles.labelStyle}
                  placeholderStyle={loginStyles.placeholderStyle}
                  textErrorStyle={loginStyles.textErrorStyle}
                />
              </View>
              <View style={loginStyles.verifyButtonContainer}>
                <CommonButton
                  title={strings.sendOtp}
                  onPress={handleVerifyEmailButton}
                  applyGradient={email.length === 0 ? false : true}
                  style={
                    email.length === 0
                      ? loginStyles.disabledButton
                      : loginStyles.enabledButton
                  }
                  disabled={email.length === 0 ? true : false}
                />
              </View>
            </Fragment>
          ) : (
            <Fragment>
              <View style={loginStyles.contentContainerStyle}>
                <OtpInput
                  inputValue={email}
                  isLoginPage={true}
                  otpValue={otpValue}
                  isLogin={true}
                  setOtpValue={setOtpValue}
                  handleEditButton={handleEditButton}
                  handleOnOtpChange={handleOnOtpChange}
                  setIsMobileNumberVerified={setIsMobileNumberVerified}
                  isMobileNumberVerified={isMobileNumberVerified}
                  handleMobileNumberVerification={
                    handleMobileNumberVerification
                  }
                />
              </View>
              <View style={loginStyles.verifyButtonContainer}>
                <CommonButton
                  title={strings.continue}
                  onPress={handleVerifyOtpButton}
                  applyGradient={
                    !(otpValue.length == constants.otpMaxLength) ? false : true
                  }
                  style={
                    !(otpValue.length == constants.otpMaxLength)
                      ? loginStyles.disabledButton
                      : loginStyles.enabledButton
                  }
                  disabled={
                    !(otpValue.length == constants.otpMaxLength) ? true : false
                  }
                />
              </View>
            </Fragment>
          )}

          <View style={loginStyles.socialMediaLogoHolder}>
            <Image
              source={MediaAssets.ic_google}
              style={loginStyles.socialMediaLoginIcon}
            />
            <Image
              source={MediaAssets.ic_fb}
              style={loginStyles.socialMediaLoginIcon}
            />
          </View>
          <View
            style={[
              loginStyles.container,
              loginStyles.footerContainer,
              !isEmailVerified
                ? loginStyles.verifyEmailScreenFooterContainer
                : loginStyles.otpScreenFooterContainer,
            ]}>
            <CustomText
              style={loginStyles.joinedAlreadytext}
              onPress={() => {
                navigation.navigate(routes.registration);
              }}>
              {strings.donHaveAnAccount}{' '}
              <CustomText style={loginStyles.loginHereText}>
                {strings.signUpHere}
              </CustomText>
            </CustomText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Login;
