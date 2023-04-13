import {TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import CustomText from '../../../common-components/custom-text/CustomText';
import styles from './ProfileMenu.styles';
import {Overlay} from '@rneui/themed';
import {routes} from '../../../navigation/route-names/RouteName';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProfileMenuComponent = (props: any) => {
  const {isMenuOption, handleMenuOption, route} = props;
  const navigation: any = useNavigation();

  const profileState = useSelector((state: any) => state.ProfileRedux);

  return (
    <Overlay
      animationType="fade"
      transparent={true}
      isVisible={isMenuOption}
      fullScreen={false}
      onBackdropPress={handleMenuOption}
      overlayStyle={
        route &&
        route?.params?.profileId !== profileState?.loginId &&
        route?.params?.profileId !== undefined
          ? styles.subContainer
          : styles.container
      }>
      {route &&
      route?.params?.profileId !== profileState?.loginId &&
      route?.params?.profileId !== undefined ? (
        <Fragment>
          <TouchableOpacity
            style={styles.menuItemButton}
            onPress={() => {
              handleMenuOption();
            }}>
            <CustomText style={styles.menuItem}>Share Profile</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemButton}
            onPress={() => {
              handleMenuOption();
            }}>
            <CustomText style={styles.menuItem}>Report</CustomText>
          </TouchableOpacity>
        </Fragment>
      ) : (
        <Fragment>
          <TouchableOpacity
            style={styles.menuItemButton}
            onPress={() => {
              handleMenuOption();
              navigation.navigate(routes.editProfile);
            }}>
            <CustomText style={styles.menuItem}>Edit Profile</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemButton}
            onPress={() => {
              handleMenuOption();
              navigation.navigate(routes.favourites);
            }}>
            <CustomText style={styles.menuItem}>Favorites</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemButton}
            onPress={handleMenuOption}>
            <CustomText style={styles.menuItem}>Settings</CustomText>
          </TouchableOpacity>
        </Fragment>
      )}
    </Overlay>
  );
};

export default ProfileMenuComponent;
