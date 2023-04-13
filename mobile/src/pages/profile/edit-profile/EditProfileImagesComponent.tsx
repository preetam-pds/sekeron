import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MediaAssets from '../../../assets';
import EditProfileImageModal from './EditProfileImageModal';
import {styles} from './EditProfileImageComponent.styles';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';
import Colors from '../../../resources/Colors';

const defaultProfile = MediaAssets.ic_profile_default_avator;
const defaultCoverImage = MediaAssets.ic_profile_default_cover_image;

const EditProfileImagesComponent = (props:any) => {
  const { values, setFieldValue } = props;
  const navigation: any = useNavigation();

  const [isCoverImage, setIsCoverOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileOrCover, setProfileOrCover] = useState<any>(null);

  const handleCoverImageModal = () => {
    setIsCoverOpen(!isCoverImage);
    setProfileOrCover('cover');
  };

  const handleProfileImageModal = () => {
    setIsProfileOpen(!isProfileOpen);
    setProfileOrCover('profile');
  };

  const handleRemoveProfileOrCoverImage = () => {
    if (profileOrCover === 'cover') {
      setFieldValue('coverImage',null);
    } else {
      setFieldValue('profileImage',null);
    }
  };

  const handleResponse = res => {
    if (profileOrCover === 'cover') {
      setFieldValue('coverImage',res?.assets[0]?.uri);
    } else {
      setFieldValue('profileImage',res?.assets[0]?.uri);
    }
  };

  const openCamera = async () => {
    const options = {
      navigateBack: routes.editProfile,
      mediaType: 'photo',
      setResponseBack: handleResponse,
    };
    navigation.navigate(routes.cameraScreen, options);
  };

  const openGalleryCamera = async () => {
    const options = {
      navigateBack: routes.editProfile,
      mediaType: 'photo',
      setResponseBack: handleResponse,
      cameraOrGallery: 'gallery',
    };
    navigation.navigate(routes.cameraScreen, options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.positionRelative}>
        <View style={styles.positionRelative}>
          <View style={styles.coverImage}>
            {values?.coverImage ? (
              <Image
                style={styles.imageStyle}
                source={{
                  uri: values?.coverImage && values?.coverImage,
                }}
              />
            ) : (
              <Image style={styles.imageStyle} source={defaultCoverImage} />
            )}
          </View>
          <View>
            <TouchableOpacity onPress={handleCoverImageModal}>
              <View style={styles.coverImageStyles}>
                <View style={styles.coverOuterImage}>
                  <Image
                    style={styles.coverEditImage}
                    source={MediaAssets.ic_edit_pencil_icon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.positionRelative}>
          <View style={styles.coverInnerImage}>
            {values?.profileImage ? (
              <Image
                style={[
                  styles.profileImage,
                  {borderColor: Colors.primaryThemeColor},
                ]}
                source={{
                  uri: values?.profileImage && values?.profileImage,
                }}
              />
            ) : (
              <Image
                style={[
                  styles.profileImage,
                  {borderColor: Colors.quaternaryBlueColor},
                ]}
                source={defaultProfile}
              />
            )}
          </View>
          <TouchableOpacity onPress={handleProfileImageModal}>
            <View style={styles.profileMainImage}>
              <View style={styles.coverOuterImage}>
                <Image
                  style={styles.coverEditImage}
                  source={MediaAssets.ic_edit_pencil_icon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <EditProfileImageModal
        title="Cover Image"
        isOpen={isCoverImage}
        handleCloser={handleCoverImageModal}
        openGalleryCamera={openGalleryCamera}
        openCamera={openCamera}
        imageUri={values?.coverImage && values?.coverImage}
        defaultImageUri={defaultCoverImage}
        handleRemoveProfileOrCoverImage={handleRemoveProfileOrCoverImage}
      />
      <EditProfileImageModal
        title="Profile Picture"
        isOpen={isProfileOpen}
        openCamera={openCamera}
        openGalleryCamera={openGalleryCamera}
        handleCloser={handleProfileImageModal}
        imageUri={values?.profileImage && values?.profileImage}
        defaultImageUri={defaultProfile}
        handleRemoveProfileOrCoverImage={handleRemoveProfileOrCoverImage}
      />
    </View>
  );
};

export default EditProfileImagesComponent;
