import {View, Image, Keyboard, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import MediaAssets from '../../../../assets/index';
import CommonButton from '../../../../common-components/common-button/CommonButton';
import createProfileStyles from './CreateProfile.Style';
import {
  constants,
  loginRedux,
  PlatformEnum,
  strings,
  ValidationUtils,
} from '@sekeron/domain';
import Colors from '../../../../resources/Colors';
import InputField from '../../../../common-components/input-field/InputField';
import CustomText from '../../../../common-components/custom-text/CustomText';
import InputStyle from '../../../../common-components/input-field/InputField.Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';

const dispatchAction = (dispatch: Dispatch<any>) => ({
  setLogin: (data: any) => dispatch(loginRedux.actions.setLoginState(data)),
});

const CreateProfile = (props: any) => {
  const skillOptions = ['Guitarist', 'Pianist'];
  const [userSkills, setUserSkills] = useState(skillOptions);
  const [skills, setSkills] = useState<any[]>([]); //skills
  const [skillChips, setSkillChips] = useState<any[]>([]); //name convention
  const [searchKey, setSearchKey] = useState('');
  const [isCustomSkill, setIsCustomSkill] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const {setLogin} = dispatchAction(useDispatch());

  //validtion utils

  const search = async (searchText: any) => {
    if (searchText.length > 0) {
      let data = userSkills.filter(function (item: any) {
        return item.toLowerCase().includes(searchText.toLowerCase());
      });
      if (data.length > 0) {
        setUserSkills(data);
        setIsCustomSkill(false);
        setSkills(data);
      } else if (data.length == 0) {
        setSkills([]);
        setIsCustomSkill(true);
      }
    } else {
      setSkills([]);
      setUserSkills(skillOptions);
    }
  };

  const deleteTags = (index: any) => {
    skillChips.splice(index, 1);
    setSkillChips((skillChips: any) => [...skillChips]);
  };

  // configure skill options
  const configureSkillOptions = (item: any) => {
    const trimmedInput = item.trim();
    setSkillChips((prevState: any) => [...prevState, trimmedInput]);
    setSearchKey('');
    setUserSkills(skillOptions);
    setIsCustomSkill(false);
    Keyboard.dismiss();
  };

  //nameValidation
  const nameValidation = (value: any) => {
    props?.setUserName(value);
    props?.setIsUserNameValid(ValidationUtils.isUserNameAvailable(value));
  };
  const onBlurNameInput = (e: any) => {
    //change fullname to camel case
    props?.setIsUserNameValid(
      ValidationUtils.isUserNameAvailable(props?.userName),
    );
  };

  const handleButton = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', constants.loginToken);
      setLogin({key: 'isTokenSet', value: true});
    } catch (error: any) {
      console.log(error, 'error');
    }
  };

  const createCustomSkill = () => {
    const trimmedInput = searchKey.trim();
    setSkillChips((prevState: any) => [...prevState, trimmedInput]);
    setSearchKey('');
    setUserSkills(skillOptions); //todo
    setIsCustomSkill(false);
    Keyboard.dismiss();
  };

  return (
    <View
      style={[
        createProfileStyles.container,
        createProfileStyles.secondaryContainer,
      ]}>
      <CustomText style={createProfileStyles.oneLastStepText}>
        {strings.thanksOneLastOneStep}
      </CustomText>
      <TouchableOpacity
        onPress={() => {
          props.handleBackButton();
        }}
        style={createProfileStyles.backButtonContainer}>
        <Image
          source={MediaAssets.ic_header_back_arrow}
          style={createProfileStyles.backButton}
        />
      </TouchableOpacity>
      <CustomText style={createProfileStyles.personaliseYourProfileText}>
        {strings.letsPersonalizeYourProfile}
      </CustomText>
      <View style={createProfileStyles.secondaryContainer}>
        <InputField
          value={props?.userName}
          label={strings.enterUserName}
          placeholderTextColor={Colors.whiteColor}
          handleChange={nameValidation}
          checkValidInput={props?.isUserNameValid}
          onBlur={onBlurNameInput}
          onFocus={() => {}}
          isNameTextnput={true}
          errorMsg={strings.userNameAlreadyExist}
          style={[
            createProfileStyles.placeHolder,
            createProfileStyles.placeHolderWidth,
            createProfileStyles.secondaryContainer,
            createProfileStyles.input,
            props?.userName?.length == 0 && props?.isUserNameValid
              ? createProfileStyles.emptyInput
              : null,
            props?.isUserNameValid && props?.userName?.length > 0
              ? createProfileStyles.validInput
              : null,
            !props?.isUserNameValid && props?.userName?.length > 0
              ? createProfileStyles.inValidInput
              : null,
          ]}
          inputStyle={createProfileStyles.inputStyle}
          labelStyle={createProfileStyles.labelStyle}
          placeholderStyle={createProfileStyles.placeholderStyle}
          textErrorStyle={createProfileStyles.textErrorStyle}
        />
      </View>

      {searchKey || skillChips?.length > 0 ? (
        <CustomText style={createProfileStyles.enterYourRoleText}>
          {strings.selectRole}
        </CustomText>
      ) : null}

      <View
        style={[
          createProfileStyles.inputContainer,
          createProfileStyles.secondaryContainer,
        ]}>
        <View
          style={[
            createProfileStyles.skillTagsHolder,
            createProfileStyles.placeHolderWidth,
            createProfileStyles.secondaryContainer,
            searchKey || skillChips.length > 0
              ? createProfileStyles.validInput
              : createProfileStyles.emptyInput,
            Platform.OS === PlatformEnum.ios
              ? skillChips.length == 0
                ? createProfileStyles.filledTagInput
                : createProfileStyles.emptySkilledTagInput
              : null,
          ]}>
          <View
            style={[
              createProfileStyles.skillTagsInputHolder,
              createProfileStyles.secondaryContainer,
            ]}>
            {skillChips.map((item: any, index: any) => {
              return (
                <View
                  style={[
                    createProfileStyles.skillTags,
                    createProfileStyles.secondaryContainer,
                  ]}
                  key={index}>
                  <CustomText style={createProfileStyles.skills}>
                    {item}
                  </CustomText>
                  <TouchableOpacity
                    onPress={() => {
                      deleteTags(index);
                    }}>
                    <Image
                      source={MediaAssets.ic_delete}
                      style={createProfileStyles.deleteTag}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
            <InputField
              placeholder={skillChips?.length > 0 ? null : strings.selectRole}
              placeholderTextColor={Colors.secondaryGreyColor}
              style={createProfileStyles.skillsInputHolder}
              editable={skillChips.length > 5 ? false : true}
              value={searchKey}
              onFocus={() => {
                setIsFocused(true);
              }}
              isSkillTagsInput={true}
              onChangeText={(value: any) => {
                setSearchKey(value);
                search(value);
              }}
              skillChips={skillChips}
              onBlur={() => {
                setIsFocused(false);
              }}
            />
          </View>
        </View>

        {(skills?.length > 0 && searchKey?.length > 0) ||
        (isFocused && searchKey.length === 0) ? (
          <View
            style={[
              createProfileStyles.skillsHolder,
              createProfileStyles.placeHolderWidth,
            ]}>
            {userSkills.map((item: any, index: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    configureSkillOptions(item);
                  }}
                  key={index}>
                  <View
                    style={[
                      createProfileStyles.skillsOptionHolder,
                      createProfileStyles.placeHolderWidth,
                    ]}
                    key={index}>
                    <CustomText style={createProfileStyles.skillOptions}>
                      {item}
                    </CustomText>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}

        {(isCustomSkill && searchKey?.length > 0) ||
        (skillChips?.length > 0 && searchKey?.length > 0) ? (
          <TouchableOpacity
            onPress={() => {
              createCustomSkill();
            }}>
            <View
              style={[
                createProfileStyles.skillsHolder,
                createProfileStyles.placeHolderWidth,
              ]}>
              <CustomText style={createProfileStyles.createCustomSkill}>
                + {strings.createCustomSkill}
              </CustomText>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      {skillChips.length > 5 ? (
        <View style={InputStyle.validationContainer}>
          <Image source={MediaAssets.ic_caution} style={InputStyle.errorMsg} />
          <CustomText style={InputStyle.validationErrorText}>
            {strings.onlySixSkillsAdded}
          </CustomText>
        </View>
      ) : null}
      <View style={createProfileStyles.homeButtonHolder}>
        {props?.userName?.length > 0 && skillChips?.length > 0 ? (
          <CommonButton
            applyGradient={true}
            onPress={() => {
              handleButton();
            }}
            style={[
              createProfileStyles.enabledButton,
              createProfileStyles.secondaryContainer,
            ]}
            title={strings.takeMeToHome}
          />
        ) : (
          <CommonButton
            style={[
              createProfileStyles.disabledButton,
              createProfileStyles.secondaryContainer,
            ]}
            title={strings.takeMeToHome}
            disabled={true}
          />
        )}
      </View>
    </View>
  );
};
export default CreateProfile;
