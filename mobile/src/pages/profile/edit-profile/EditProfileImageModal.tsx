import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import {Overlay} from '@rneui/themed';
import {styles} from './EditProfileImageModal.styles';
import {strings} from '@sekeron/domain';
import Colors from '../../../resources/Colors';

const EditProfileImageModal = (props: any) => {
  const {
    isOpen,
    handleCloser,
    imageUri,
    title,
    openCamera,
    openGalleryCamera,
    handleRemoveProfileOrCoverImage,
    defaultImageUri,
  } = props;

  return (
    <View style={styles.container}>
      <Overlay
        animationType="fade"
        isVisible={isOpen}
        fullScreen={false}
        onBackdropPress={handleCloser}
        overlayStyle={styles.overlayContainer}>
        <View style={styles.secoundContainer}>
          <CustomText style={styles.flashMessageRegular}>{title}</CustomText>
          <View style={styles.subContainer}>
            <View>
              {imageUri ? (
                <Image
                  style={[
                    styles.imageCoverOrProfile,
                    {
                      borderRadius: title === 'Cover Image' ? 20 : 40,
                      borderWidth: title === 'Cover Image' ? 0 : 2,
                      borderColor: Colors.primaryThemeColor,
                    },
                  ]}
                  source={{uri: imageUri}}
                />
              ) : (
                <Image
                  style={[
                    styles.imageCoverOrProfile,
                    {
                      borderRadius: title === 'Cover Image' ? 20 : 40,
                      borderWidth: title === 'Cover Image' ? 0 : 2,
                      borderColor: Colors.quaternaryBlueColor,
                    },
                  ]}
                  source={defaultImageUri}
                />
              )}
            </View>
            {/* Camera */}
            <TouchableOpacity onPress={openCamera}>
              <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                  <Image
                    style={styles.imageOptions}
                    source={MediaAssets.ic_camera_icon}
                  />
                </View>
                <CustomText style={styles.flashMessageHighLighted}>
                  {strings.camera}
                </CustomText>
              </View>
            </TouchableOpacity>
            {/* Gallery */}
            <TouchableOpacity onPress={openGalleryCamera}>
              <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                  <Image
                    style={styles.imageOptions}
                    source={MediaAssets.ic_gallery_icon}
                  />
                </View>
                <CustomText style={styles.flashMessageHighLighted}>
                  {strings.gallery}
                </CustomText>
              </View>
            </TouchableOpacity>
            {/* Remove */}
            <TouchableOpacity
              onPress={() => {
                handleRemoveProfileOrCoverImage();
              }}>
              <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                  <Image
                    style={styles.imageOptions}
                    source={MediaAssets.ic_image_cancel_icon}
                  />
                </View>
                <CustomText style={styles.flashMessageHighLighted}>
                  {strings.remove}
                </CustomText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default EditProfileImageModal;
