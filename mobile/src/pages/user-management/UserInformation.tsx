import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, { Fragment, useState } from 'react';
import userInformationStyles from './UserInformation.Style';
import Stepper from '../../common-components/stepper/Stepper';
import CreateProfile from './create-user/create-profile/CreateProfile';
import UserDetails from './create-user/user-details/UserDetails';
import OtpInput from '../user-management/OtpInput';
import {
  constants,
  PlatformEnum,
  strings,
  ValidationUtils,
} from '@sekeron/domain';
import CommonButton from '../../common-components/common-button/CommonButton';
import CustomText from '../../common-components/custom-text/CustomText';
import MediaAssets from '../../assets';

const UserInformation = (props: any) => {
  const [isDetailsCompleted, setIsDetailsCompleted] = useState(true);
  const [isSetPasswordCompleted, setPasswordCompleted] = useState(false);
  const [isProfileCreated, setIsProfileCreated] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [isDetails, setIsDetails] = useState(true);
  const [isOtpsent, setOtpsent] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [value, setValue] = useState(null);
  const [fullName, setFullName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhNumberValid, setIsPhNumberValid] = useState(true);
  const [userName, setUserName] = useState('');

  const handleVerifyButton = () => {
    if (isOtpsent) {
      setIsDetails(false);
      setIsProfile(true);
      setOtpsent(false);
      setPasswordCompleted(true);
    }
  };

  const handleBackButton = () => {
    setIsProfile(false);
    setOtpsent(true);
    setPasswordCompleted(false);
  };

  const handleEditButton = () => {
    setIsDetails(true);
    setOtpsent(false);
  };
  const handleOnOtpChange = (otp: any) => {
    if (ValidationUtils.isOtpValid(otp)) {
      setOtpValue(otp);
    }
  };
  return (
    <SafeAreaView
      style={[
        userInformationStyles.container,
        userInformationStyles.containerBackground,
      ]}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === PlatformEnum.ios ? strings.padding : null}
        style={userInformationStyles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <CustomText style={userInformationStyles.letsGetStartedText}>
            {strings.letsGetStarted}
          </CustomText>

          <Stepper
            isDetailsCompleted={isDetailsCompleted}
            setIsDetailsCompleted={setIsDetailsCompleted}
            isSetPasswordCompleted={isSetPasswordCompleted}
            setPasswordCompleted={setPasswordCompleted}
            setIsProfileCreated={setIsProfileCreated}
            isProfileCreated={isProfileCreated}
            setIsPassword={setIsDetails}
            setIsDetails={setIsDetails}
            setIsProfile={setIsProfile}
            isDetails={isDetails}
            isSetPassword={isOtpsent}
            isProfile={isProfile}
          />

          {isDetails ? (
            <UserDetails
              setPhoneNumber={setPhoneNumber}
              phoneNumber={phoneNumber}
              fullName={fullName}
              setFullName={setFullName}
              setIsNameValid={setIsNameValid}
              isNameValid={isNameValid}
              isPhNumberValid={isPhNumberValid}
              setIsPhNumberValid={setIsPhNumberValid}
              setValue={setValue}
              value={value}
              setOtpSent={setOtpsent}
              setUserDetailsFilled={setIsDetails}
              setIsProfile={setIsProfile}
              isDetails={isDetails}
            />
          ) : null}

          {isOtpsent ? (
            <Fragment>
              <View style={userInformationStyles.container}>
                <OtpInput
                  inputValue={phoneNumber}
                  fullName={fullName}
                  handleEditButton={handleEditButton}
                  otpValue={otpValue}
                  setOtpValue={setOtpValue}
                  handleOnOtpChange={handleOnOtpChange}
                  isUserInfo={true}
                />
                <View style={userInformationStyles.otpInputContainer}>
                  <CommonButton
                    title={strings.continue}
                    userInformation={true}
                    applyGradient={
                      !(otpValue.length === constants.otpMaxLength)
                        ? false
                        : true
                    }
                    style={
                      !(otpValue.length === constants.otpMaxLength)
                        ? userInformationStyles.disabledButton
                        : userInformationStyles.enabledButton
                    }
                    disabled={
                      !(otpValue.length === constants.otpMaxLength)
                        ? true
                        : false
                    }
                    onPress={handleVerifyButton}
                  />
                </View>
              </View>
            </Fragment>
          ) : null}

          {isProfile ? (
            <View style={userInformationStyles.container}>
              <CreateProfile
                setUserName={setUserName}
                userName={userName}
                setIsUserNameValid={setIsUserNameValid}
                isUserNameValid={isUserNameValid}
                setIsApplicationStack={props?.setIsApplicationStack}
                handleBackButton={handleBackButton}
              />
            </View>
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UserInformation;
