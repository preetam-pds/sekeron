import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Keyboard,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import MediaAssets from '../../../../assets';
import CommonButton from '../../../../common-components/common-button/CommonButton';
import userDetailsStyles from './UserDetails.Style';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  GenderTypeEnumUtils,
  ValidationUtils,
  strings,
  PlatformEnum,
  dateFormatterUtils,
  countryCodeJson,
} from '@sekeron/domain';
import Colors from '../../../../resources/Colors';
import InputField from '../../../../common-components/input-field/InputField';
import CustomText from '../../../../common-components/custom-text/CustomText';
import BottomSheet from '../../../../common-components/bottom-sheet/BottomSheet';
import styles from '../../../../common-components/bottom-sheet/BottomSheet.Style';

const UserDetails = (props: any) => {
  const GenderType = GenderTypeEnumUtils.getGenderTypeEnums();
  const [birthDate, setBirthDate] = useState('');
  const [datePicker, setDatePicker] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [countryCode, setCountryCode] = useState(strings.countryCode);
  const [phoneNumberLength, setPhoneNumberLength] = useState(10);
  const [countryCodeValue, setCountryCodeValue] = useState('');
  const [filteredCountryCode, setFilteredCountryCode] = useState([]);

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const toggleCountryCodeModal = () => {
    setModalVisible(!isModalVisible);
    setCountryCodeValue('');
    setFilteredCountryCode([]);
  };

  const onDateSelected = (event: any, value: any) => {
    setDatePicker(false);
    if (
      dateFormatterUtils.currentDate(new Date()) ==
      dateFormatterUtils.formatDate(value)
    ) {
      setBirthDate('');
    } else {
      setBirthDate(dateFormatterUtils.formatDate(value));
    }
  };

  const nameValidation = (value: any) => {
    props?.setFullName(value);
    props?.setIsNameValid(ValidationUtils.isNameValid(value));
  };

  const handleButton = () => {
    if (props?.isDetails) {
      props.setUserDetailsFilled(false); //change it isUserDetailsFilled
      props.setOtpSent(true);
    }
  };

  const onPressCountryCode = () => {
    props.setPhoneNumber('');
  };

  const filteredPhoneNumberCode = (inputValue: any) => {
    setCountryCodeValue(inputValue);
    const data: any = countryCodeJson.filter((item: any) => {
      if (
        item?.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item?.dial_code.toLowerCase().includes(inputValue.toLowerCase())
      ) {
        return item;
      }
    });
    setFilteredCountryCode(data);
  };

  const onPressPhoneNumberCode = (item: any) => {
    setCountryCode(item.dial_code);
    setPhoneNumberLength(item.pLength);
    onPressCountryCode();
    Keyboard.dismiss();
    setModalVisible(false);
  };

  const handleChangePhoneNumber = (phoneNumber: any) => {
    props.setPhoneNumber(phoneNumber);
    if (phoneNumber) {
      props?.setIsPhNumberValid(
        ValidationUtils.isPhoneNumberValid(countryCode, phoneNumber),
      );
    }
  };
  const onBlurPhoneNumberInput = () => {
    if (props.phoneNumber.length > 0) {
      props?.setIsPhNumberValid(
        ValidationUtils.isPhoneNumberValid(countryCode, props.phoneNumber),
      );
    } else {
      props?.setIsPhNumberValid(true);
    }
  };

  const onBlurNameInput = (e: any) => {
    props?.setIsNameValid(ValidationUtils.isNameValid(props?.fullName));
  };

  const RenderInputLabel = (props: any) => {
    return <CustomText style={props?.style}>{props?.label}</CustomText>;
  };

  const renderCountryCode = () => {
    return (
      <Fragment>
        <View style={styles.countryCodeInput}>
          <Image
            style={styles.searchImage}
            source={MediaAssets.ic_search_inactive}
          />
          <TextInput
            style={styles.countryCodeTextInput}
            value={countryCodeValue}
            maxLength={10}
            onChangeText={(value: any) => {
              filteredPhoneNumberCode(value);
            }}
            placeholder={'Search country code'}
            placeholderTextColor={Colors.nonaryThemeColor}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            filteredCountryCode.length > 0
              ? filteredCountryCode
              : countryCodeJson
          }
          keyExtractor={(item, index) => '' + item + index}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          style={styles.flatListContainer}
          keyboardShouldPersistTaps={'handled'}
          renderItem={({item, index}: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onPressPhoneNumberCode(item);
                }}
                style={styles.countryCodeContainer}>
                <Text style={styles.countryCodeTextStyle}>🇮🇳</Text>
                <Text
                  style={[
                    styles.countryCodeTextStyle,
                    styles.countryCode,
                    styles.countryCodeWidth,
                  ]}>
                  {item?.dial_code}
                </Text>
                <Text style={[styles.countryCodeTextStyle, styles.countryCode]}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </Fragment>
    );
  };
  console.log(birthDate, 'birthDatebirthDate');

  return (
    <View
      style={[
        userDetailsStyles.container,
        userDetailsStyles.secondaryContainer,
      ]}>
      <BottomSheet
        renderItem={renderCountryCode}
        setModalVisible={setModalVisible}
        isModalVisible={isModalVisible}
        toggleModal={toggleCountryCodeModal}
      />
      <CustomText style={userDetailsStyles.greetingText}>
        {strings.greetingsFromSkeron}
      </CustomText>
      <CustomText style={userDetailsStyles.whatsYourNameText}>
        {strings.whatsYourName}
      </CustomText>
      <View style={userDetailsStyles.secondaryContainer}>
        <InputField
          value={props?.fullName}
          label={strings.enterFullName}
          placeholderTextColor={Colors.whiteColor}
          handleChange={nameValidation}
          checkValidInput={props?.isNameValid}
          onBlur={onBlurNameInput}
          onFocus={() => {}}
          isNameTextnput={true}
          errorMsg={strings.pleaseEnterFullname}
          style={[
            userDetailsStyles.placeHolder,
            userDetailsStyles.secondaryContainer,
            userDetailsStyles.input,
            props?.fullName?.length == 0 && props?.isNameValid
              ? userDetailsStyles.emptyInput
              : null,
            props?.isNameValid && props?.fullName?.length > 0
              ? userDetailsStyles.validInput
              : null,
            !props?.isNameValid && props?.fullName?.length > 0
              ? userDetailsStyles.inValidInput
              : null,
          ]}
          inputStyle={userDetailsStyles.inputStyle}
          labelStyle={userDetailsStyles.labelStyle}
          placeholderStyle={userDetailsStyles.placeholderStyle}
          textErrorStyle={userDetailsStyles.textErrorStyle}
        />
      </View>
      <View style={userDetailsStyles.secondaryContainer}>
        {props.value ? (
          <RenderInputLabel
            style={[
              userDetailsStyles.floatingText,
              userDetailsStyles.selectYourGenderText,
            ]}
            label={strings.selectGender}
          />
        ) : null}
        <Dropdown
          style={[
            userDetailsStyles.placeHolder,
            userDetailsStyles.secondaryContainer,
            userDetailsStyles.dropDownStyle,
            props.value
              ? userDetailsStyles.validInput
              : userDetailsStyles.emptyInput,
          ]}
          containerStyle={userDetailsStyles.dropDownContainer}
          placeholderStyle={[
            userDetailsStyles.dropDownPlaceHolderStyle,
            props.value
              ? userDetailsStyles.dropDownSelectedText
              : userDetailsStyles.dropDownText,
          ]}
          selectedTextStyle={userDetailsStyles.dropDownSelectedTextStyle}
          inputSearchStyle={userDetailsStyles.dropDowninputSearchStyle}
          iconStyle={userDetailsStyles.dropDowniconStyle}
          itemTextStyle={userDetailsStyles.itemTextStyle}
          activeColor={Colors.secondaryGreyColor} // move to color file
          itemContainerStyle={userDetailsStyles.itemContainerStyle}
          data={GenderType}
          maxHeight={300}
          labelField="label"
          valueField="value"
          keyboardAvoiding
          placeholder={strings.selectGender}
          value={props.value}
          onChange={(item: any) => {
            props.setValue(item.value);
          }}
          renderRightIcon={() => (
            <Image
              source={MediaAssets.ic_dropdown}
              style={userDetailsStyles.dropDownIcon}
            />
          )}
        />
        <TouchableOpacity
          style={[
            userDetailsStyles.placeHolder,
            userDetailsStyles.secondaryContainer,
            userDetailsStyles.dobPlaceHolder,
            birthDate
              ? userDetailsStyles.validInput
              : userDetailsStyles.emptyInput,
          ]}
          onPress={() => {
            showDatePicker();
          }}>
          {birthDate.length > 0 ? (
            <Fragment>
              <RenderInputLabel
                style={[
                  userDetailsStyles.floatingText,
                  userDetailsStyles.enterDobText,
                ]}
                label={strings.dateOfBirth}
              />
              <CustomText style={userDetailsStyles.dob}>{birthDate}</CustomText>
            </Fragment>
          ) : (
            <CustomText style={userDetailsStyles.enterDobHolder}>
              {strings.dateOfBirth}
            </CustomText>
          )}
          <TouchableOpacity
            onPress={() => {
              showDatePicker();
            }}>
            <Image
              source={MediaAssets.ic_calender}
              style={userDetailsStyles.calendar}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View>
          {datePicker && (
            <DateTimePicker
              value={new Date()}
              mode={'date'}
              display={
                Platform.OS === PlatformEnum.ios
                  ? strings.spinner
                  : strings.default //move ios to platformtype enum
              }
              is24Hour={true}
              onChange={onDateSelected}
              maximumDate={
                new Date(
                  dateFormatterUtils.maximumDate(new Date()).year,
                  dateFormatterUtils.maximumDate(new Date()).month,
                  dateFormatterUtils.maximumDate(new Date()).day,
                )
              } //current year-minimum age
              textColor={Colors.whiteColor}
              style={userDetailsStyles.datePicker}
            />
          )}
        </View>
        <View
          style={[
            userDetailsStyles.phoneNumberInputHolder,
            userDetailsStyles.secondaryContainer,
          ]}>
          <CustomText
            style={[
              userDetailsStyles.floatingText,
              userDetailsStyles.label,
              props.isPhNumberValid
                ? userDetailsStyles.validLabel
                : userDetailsStyles.inValidLabelStyle,
            ]}>
            {strings.enterPhoneNumber}
          </CustomText>
          <View style={userDetailsStyles.phoneInputBorder}></View>
          <TouchableOpacity
            onPress={() => {
              toggleCountryCodeModal();
            }}
            activeOpacity={1}
            style={[
              userDetailsStyles.countryCodeInputButton,
              userDetailsStyles.secondaryContainer,
              props.isPhNumberValid
                ? props.phoneNumber.length > 0
                  ? userDetailsStyles.validInput
                  : userDetailsStyles.emptyInput
                : userDetailsStyles.inValidInput,
            ]}>
            <CustomText
              style={[
                userDetailsStyles.countryCode,
                props.isPhNumberValid
                  ? userDetailsStyles.inValidPhoneNumber
                  : userDetailsStyles.validPhoneNumber,
              ]}>
              {countryCode}
            </CustomText>
          </TouchableOpacity>

          <View
            style={[
              userDetailsStyles.phoneNumberContainer,
              userDetailsStyles.secondaryContainer,
              props.isPhNumberValid
                ? props.phoneNumber.length > 0
                  ? userDetailsStyles.validInput
                  : userDetailsStyles.emptyInput
                : userDetailsStyles.inValidInput,
            ]}>
            <InputField
              value={props.phoneNumber}
              isPhoneNumberTextnput={true}
              editable={countryCode ? true : false}
              inputStyle={[
                userDetailsStyles.phoneNumberInput,
                props.isPhNumberValid
                  ? userDetailsStyles.inValidPhoneNumber
                  : userDetailsStyles.validPhoneNumber,
              ]}
              onChangeText={handleChangePhoneNumber}
              onBlur={onBlurPhoneNumberInput}
              maxLength={phoneNumberLength}
            />
          </View>
        </View>
        {!props.isPhNumberValid ? (
          <View
            style={[
              userDetailsStyles.validation,
              userDetailsStyles.secondaryContainer,
            ]}>
            <Image
              source={MediaAssets.ic_caution}
              style={userDetailsStyles.caution}
            />
            <CustomText style={userDetailsStyles.validationMessage}>
              {strings.pleaseEnterPhoneNumber}
            </CustomText>
          </View>
        ) : null}
        <View style={userDetailsStyles.buttonHolder}>
          {props.isPhNumberValid &&
          props?.fullName?.length > 0 &&
          props?.value &&
          props?.isNameValid &&
          birthDate ? (
            <CommonButton
              applyGradient={true}
              title={strings.continue}
              onPress={() => {
                handleButton();
              }}
              style={[
                userDetailsStyles.enabledButton,
                userDetailsStyles.secondaryContainer,
              ]}
              value={props?.value}
              setVisible={props?.setVisible}
              visible={props?.visible}
            />
          ) : (
            <CommonButton
              disabled={true}
              style={[
                userDetailsStyles.disabledButton,
                userDetailsStyles.secondaryContainer,
              ]}
              title={strings.continue}
            />
          )}
        </View>
      </View>
    </View>
  );
};
export default UserDetails;
