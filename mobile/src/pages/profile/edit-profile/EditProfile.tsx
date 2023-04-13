import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import AccordionCustomComponent from '../../../common-components/accordion-custom-component/AccordionCustomComponent';
import CustomTextInput from '../../../common-components/custom-text-input/CustomTextInput';
import HashtagInputComponent from '../../../common-components/hash-tag-input-custom-component/HashTagInputComponent';
import Colors from '../../../resources/Colors';
import DropdownScreen from '../../../common-components/drop-down-component/DropDownComponent';
import {
  GenderTypeEnumUtils,
  PlatformEnum,
  ProfileRedux,
  strings,
} from '@sekeron/domain';
import {Formik, getIn} from 'formik';
import {editProfileValidationSchema} from './EditProfileValidation';
import EditProfileImagesComponent from './EditProfileImagesComponent';
import {styles} from './EditProfile.styles';
import ProfileEditHeader from './EditProfileHeader';
import {useDispatch, useSelector} from 'react-redux';

const EditProfile = () => {
  const GenderType = GenderTypeEnumUtils.getGenderTypeEnums();
  const profileState = useSelector((state: any) => state.ProfileRedux);

  const actionDispatch = (dispatch: any) => ({
    setProfileByIdState: (data: any) =>
      dispatch(ProfileRedux.actions.setProfileByIdState(data)),
  });

  const {setProfileByIdState} = actionDispatch(useDispatch());

  interface IEditProfileDefaultValue {
    profileImage: any;
    coverImage: any;
    userName: string;
    name: any;
    skills: any;
    gender: any;
    describeInfo: string;
    websiteLink: string;
    addCollege: string;
    addHighSchool: string;
    country: string;
    city: string;
    instagramUrl: string;
    facebookUrl: string;
    pinterestUrl: string;
    youtubeUrl: string;
  }

  const editProfileDefaultValue: IEditProfileDefaultValue = {
    profileImage: null,
    coverImage: null,
    userName: '',
    name: '',
    skills: [],
    gender: null,
    describeInfo: '',
    websiteLink: '',
    addCollege: '',
    addHighSchool: '',
    country: '',
    city: '',
    instagramUrl: '',
    facebookUrl: '',
    pinterestUrl: '',
    youtubeUrl: '',
  };

  const handlePressedSubmit = values => {
    setProfileByIdState({
      key: 'profileInfoReduxState',
      value: values,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === PlatformEnum.ios ? strings.padding : null}
        style={styles.container}>
        <Formik
          initialValues={
            profileState?.profileInfoReduxState != null &&
            profileState?.profileInfoReduxState != undefined
              ? profileState?.profileInfoReduxState
              : editProfileDefaultValue
          }
          onSubmit={values => {
            setProfileByIdState({
              key: 'profileInfoReduxState',
              value: values,
            });
          }}
          validationSchema={editProfileValidationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            setFieldValue,
          }) => (
            <Fragment>
              <View>
                <ProfileEditHeader handlePressedSubmit={handlePressedSubmit} />
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}>
                <View>
                  <EditProfileImagesComponent
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </View>
                <AccordionCustomComponent title="Bio">
                  <View>
                    <View>
                      <CustomTextInput
                        label={'User name'}
                        placeholder="User Name"
                        onChangeText={handleChange('userName')}
                        onBlur={handleBlur('userName')}
                        value={values?.userName}
                        error={touched?.userName && errors?.userName}
                        fieldhelpertext={
                          getIn(touched, 'userName') &&
                          getIn(errors, 'userName')
                        }
                      />
                      <CustomTextInput
                        label={'name'}
                        placeholder="Name"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values?.name}
                        error={touched?.name && errors?.name}
                        fieldhelpertext={
                          getIn(touched, 'name') && getIn(errors, 'name')
                        }
                      />
                    </View>
                    <View style={styles.hashContainer}>
                      <HashtagInputComponent
                        data={values?.skills}
                        selectionColor={Colors.whiteColor}
                        textError={touched?.skills && errors?.skills}
                        focusColor={Colors.primaryBlueColor}
                        placeholder="Add Another Other Skill"
                        value={values?.skills}
                        label="Add Another Other Skill"
                        onBlur={handleBlur('skills')}
                        setFieldValue={setFieldValue}
                      />
                    </View>
                    <View style={styles.dropDownContainer}>
                      <DropdownScreen
                        // onChangeValue={handleChange('gender')}
                        onBlur={handleBlur('gender')}
                        value={values?.gender}
                        name="gender"
                        options={GenderType}
                        error={touched?.gender && errors?.gender}
                        fieldhelpertext={
                          getIn(touched, 'gender') && getIn(errors, 'gender')
                        }
                      />
                    </View>
                    <View>
                      <CustomTextInput
                        style={styles.textHeight}
                        label={'Describe Yourself'}
                        multiline={true}
                        placeholder="Describe Yourself"
                        onBlur={handleBlur('describeInfo')}
                        value={values?.describeInfo}
                        maxLength={300}
                        onChangeText={(e: any) => {
                          setFieldValue('describeInfo', e);
                        }}
                        error={touched?.describeInfo && errors?.describeInfo}
                        fieldhelpertext={
                          getIn(touched, 'describeInfo') &&
                          getIn(errors, 'describeInfo')
                        }
                      />
                      <View style={styles.descriptionContainer}>
                        <Animated.View
                          style={[
                            styles.progressBar,
                            {width: `${values?.describeInfo?.length / 3}%`},
                          ]}
                        />
                      </View>
                    </View>
                    <View>
                      <CustomTextInput
                        label={'Website / Portfolio URL'}
                        placeholder="Website / Portfolio URL"
                        onChangeText={handleChange('websiteLink')}
                        onBlur={handleBlur('websiteLink')}
                        value={values?.websiteLink}
                        error={touched?.websiteLink && errors?.websiteLink}
                        fieldhelpertext={
                          getIn(touched, 'websiteLink') &&
                          getIn(errors, 'websiteLink')
                        }
                      />
                    </View>
                  </View>
                </AccordionCustomComponent>

                {/* Educational Info */}
                <AccordionCustomComponent title="Educational Info">
                  <View>
                    <CustomTextInput
                      label={'Add College'}
                      placeholder="Add College"
                      onChangeText={handleChange('addCollege')}
                      onBlur={handleBlur('addCollege')}
                      value={values?.addCollege}
                      error={touched?.addCollege && errors?.addCollege}
                      fieldhelpertext={
                        getIn(touched, 'addCollege') &&
                        getIn(errors, 'addCollege')
                      }
                    />
                    <CustomTextInput
                      label={'Add High School'}
                      placeholder="Add High School"
                      onChangeText={handleChange('addHighSchool')}
                      onBlur={handleBlur('addHighSchool')}
                      value={values?.addHighSchool}
                      error={touched?.addHighSchool && errors?.addHighSchool}
                      fieldhelpertext={
                        getIn(touched, 'addHighSchool') &&
                        getIn(errors, 'addHighSchool')
                      }
                    />
                  </View>
                </AccordionCustomComponent>

                {/* Location */}
                <AccordionCustomComponent title="Location">
                  <View>
                    <CustomTextInput
                      label={'Country'}
                      placeholder="Country"
                      onChangeText={handleChange('country')}
                      onBlur={handleBlur('country')}
                      value={values?.country}
                      error={touched?.country && errors?.country}
                      fieldhelpertext={
                        getIn(touched, 'country') && getIn(errors, 'country')
                      }
                    />
                    <CustomTextInput
                      label={'City'}
                      placeholder="City"
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      value={values?.city}
                      error={touched?.city && errors?.city}
                      fieldhelpertext={
                        getIn(touched, 'city') && getIn(errors, 'city')
                      }
                    />
                  </View>
                </AccordionCustomComponent>

                {/* Social Media Links */}
                <AccordionCustomComponent title="Social Media Links">
                  <View>
                    <CustomTextInput
                      label={'Instagram URL'}
                      placeholder="Instagram URL"
                      onChangeText={handleChange('instagramUrl')}
                      onBlur={handleBlur('instagramUrl')}
                      value={values?.instagramUrl}
                      error={touched?.instagramUrl && errors?.instagramUrl}
                      fieldhelpertext={
                        getIn(touched, 'instagramUrl') &&
                        getIn(errors, 'instagramUrl')
                      }
                    />
                    <CustomTextInput
                      label={'Facebook URL'}
                      placeholder="Facebook URL"
                      onChangeText={handleChange('facebookUrl')}
                      onBlur={handleBlur('facebookUrl')}
                      value={values?.facebookUrl}
                      error={touched?.facebookUrl && errors?.facebookUrl}
                      fieldhelpertext={
                        getIn(touched, 'facebookUrl') &&
                        getIn(errors, 'facebookUrl')
                      }
                    />
                    <CustomTextInput
                      label={'Pinterest URL'}
                      placeholder="Pinterest URL"
                      onChangeText={handleChange('pinterestUrl')}
                      onBlur={handleBlur('pinterestUrl')}
                      value={values?.pinterestUrl}
                      error={touched?.pinterestUrl && errors?.pinterestUrl}
                      fieldhelpertext={
                        getIn(touched, 'pinterestUrl') &&
                        getIn(errors, 'pinterestUrl')
                      }
                    />
                    <CustomTextInput
                      label={'Youtube URL'}
                      placeholder="Youtube URL"
                      onChangeText={handleChange('youtubeUrl')}
                      onBlur={handleBlur('youtubeUrl')}
                      value={values?.youtubeUrl}
                      error={touched?.youtubeUrl && errors?.youtubeUrl}
                      fieldhelpertext={
                        getIn(touched, 'youtubeUrl') &&
                        getIn(errors, 'youtubeUrl')
                      }
                    />
                  </View>
                </AccordionCustomComponent>
              </ScrollView>
            </Fragment>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfile;
