import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ProfileMenu.styles';
import {Overlay} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../../common-components/custom-text/CustomText';

const ProfileEditDeletePost = (props: any) => {
  const {isMenuOption, handleMenuOption} = props;
  const navigation: any = useNavigation();

  return (
    <Overlay
      animationType="fade"
      transparent={true}
      isVisible={isMenuOption}
      fullScreen={false}
      onBackdropPress={handleMenuOption}
      overlayStyle={styles.container}>
      <TouchableOpacity
        style={styles.menuItemButton}
        onPress={() => {
          handleMenuOption();
        //   navigation.navigate(routes.editProfile);
        }}>
        <CustomText style={styles.menuItem}>Edit Post</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItemButton}
        onPress={() => {
          handleMenuOption();
        //   navigation.navigate(routes.favourites);
        }}>
        <CustomText style={styles.menuItem}>Delete Post</CustomText>
      </TouchableOpacity>
    </Overlay>
  );
};

export default ProfileEditDeletePost;
