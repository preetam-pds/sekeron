import {View, Image, SafeAreaView, ScrollView, Platform} from 'react-native';
import React, {Fragment, useState} from 'react';
import MediaAssets from '../../../../assets';
import registerStyle from './Registration.Style';
import InputField from '../../../../common-components/input-field/InputField';
import {
  ValidationUtils,
  strings,
  constants,
  PlatformEnum,
} from '@sekeron/domain';
import OtpInput from '../../OtpInput';
import CommonButton from '../../../../common-components/common-button/CommonButton';
import SuccessDialog from '../../../../common-components/success-dialog/SuccessDialog';
import UserInformation from '../../UserInformation';
import CustomText from '../../../../common-components/custom-text/CustomText';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../../navigation/route-names/RouteName';
import Colors from '../../../../resources/Colors';
import styles from '../../../../common-components/success-dialog/SuccessDialog.Style';

//registeration & change spelling registration
const Registration = (props: any) => {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(true);
  const [isEmailInputEmpty, setsEmailInputEmpty] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [isMobileNumberVerified, setIsMobileNumberVerified] = useState(false);
  const [isUserDetailsPage, setIsUserDetailsPage] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigation: any = useNavigation();

  //move to utils
  const handleChangeEmailInput = (email: any) => {
    setEmail(email);
    setCheckValidEmail(ValidationUtils.isValidEmail(email));
    setsEmailInputEmpty(ValidationUtils.isEmpty(email));
  };
  //write it in one function
  const onBlurEmailInput = (e: any) => {
    if (isEmailInputEmpty) {
      setCheckValidEmail(true);
      setIsFocused(false);
    }
  };
  const onFocusEmailInput = () => {
    setIsFocused(true);
  };
  const handleEmailVerifyButton = () => {
    setIsEmailVerified(true);
  };

  const isModalOpenHandler = () => {
    setIsModalOpened(true);
    setTimeout(() => {
      setIsModalOpened(false);
      setIsUserDetailsPage(true);
    }, 3000);
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
      {!isUserDetailsPage ? (
        <SafeAreaView
          style={[registerStyle.contentContainer, registerStyle.container]}>
          {!isModalOpened ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={registerStyle.contentContainerStyle}>
              <View
                style={[
                  registerStyle.contentContainerStyle,
                  registerStyle.sekeronLogoContainer,
                ]}>
                <Image
                  style={registerStyle.sekeronLogoImage}
                  source={MediaAssets.ic_sekeron}
                />
              </View>
              {isEmailVerified ? (
                <Fragment>
                  <View style={registerStyle.contentContainerStyle}>
                    <OtpInput
                      inputValue={email}
                      otpValue={otpValue}
                      setOtpValue={setOtpValue}
                      handleEditButton={handleEditButton}
                      handleOnOtpChange={handleOnOtpChange}
                      setIsMobileNumberVerified={setIsMobileNumberVerified}
                      handleMobileNumberVerification={
                        handleMobileNumberVerification
                      }
                      isRegistration={true}
                    />
                  </View>
                  <View style={registerStyle.verifyButtonContainer}>
                    <CommonButton
                      title={strings.verify}
                      applyGradient={
                        !(otpValue.length === constants.otpMaxLength)
                          ? false
                          : true
                      }
                      style={
                        !(otpValue.length === constants.otpMaxLength)
                          ? registerStyle.disabledButton
                          : registerStyle.enabledButton
                      }
                      disabled={
                        !(otpValue.length === constants.otpMaxLength)
                          ? true
                          : false
                      }
                      onPress={isModalOpenHandler}
                    />
                  </View>
                </Fragment>
              ) : (
                <Fragment>
                  <View
                    style={[
                      registerStyle.contentContainerStyle,
                      registerStyle.emailInputFieldContainer,
                    ]}>
                    <InputField
                      value={email}
                      label={strings.enterEmailId}
                      placeholderTextColor={Colors.whiteColor}
                      handleChange={handleChangeEmailInput}
                      checkValidInput={checkValidEmail}
                      onBlur={onBlurEmailInput}
                      onFocus={onFocusEmailInput}
                      errorMsg={strings.pleaseEnterEmail}
                      isEmailTextnput={true}
                      style={[
                        registerStyle.input,
                        checkValidEmail
                          ? isFocused
                            ? registerStyle.focusedInput
                            : registerStyle.validInput
                          : registerStyle.inValidInput,
                      ]}
                      inputStyle={registerStyle.inputStyle}
                      labelStyle={registerStyle.labelStyle}
                      placeholderStyle={registerStyle.placeholderStyle}
                      textErrorStyle={registerStyle.textErrorStyle}
                    />
                  </View>
                  <View style={registerStyle.verifyButtonContainer}>
                    <CommonButton
                      title={strings.verify}
                      applyGradient={
                        !checkValidEmail || isEmailInputEmpty ? false : true
                      }
                      style={
                        !checkValidEmail || isEmailInputEmpty
                          ? registerStyle.disabledButton
                          : registerStyle.enabledButton
                      }
                      disabled={
                        !checkValidEmail || isEmailInputEmpty ? true : false
                      }
                      onPress={handleEmailVerifyButton}
                    />
                  </View>
                </Fragment>
              )}

              <View style={registerStyle.socialMediaLogoHolder}>
                <Image
                  source={MediaAssets.ic_google}
                  style={registerStyle.socialMediaLoginIcon}
                />
                <Image
                  source={MediaAssets.ic_fb}
                  style={registerStyle.socialMediaLoginIcon}
                />
              </View>
              <View
                style={[
                  registerStyle.container,
                  registerStyle.footerContainer,
                  !isEmailVerified
                    ? registerStyle.verifyEmailScreenFooterContainer
                    : registerStyle.otpScreenFooterContainer,
                ]}>
                <CustomText
                  style={registerStyle.joinedAlreadytext}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  {strings.joinedAlready}
                  <CustomText style={registerStyle.loginHereText}>
                    {strings.loginHere}
                  </CustomText>
                </CustomText>
              </View>
            </ScrollView>
          ) : (
            <SuccessDialog
              shouldOpen={isModalOpened}
              isModalOpenHandler={isModalOpenHandler}
              text={<CustomText style={styles.modalText}>{strings.successfulllyVerified}</CustomText>}
              icon={MediaAssets.ic_successcheckmark}
            />
          )}
        </SafeAreaView>
      ) : (
        <UserInformation setIsApplicationStack={props?.setIsApplicationStack} />
      )}
    </Fragment>
  );
};

export default Registration;
