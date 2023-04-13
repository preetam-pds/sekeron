import {View, TouchableOpacity, Image} from 'react-native';
import React, {Fragment} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './ProfileHeader.style';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import Colors from '../../../resources/Colors';
import ProfileMenuComponent from '../../profile/profile-common-fields/ProfileMenu';

const ProfileHeader = (props: any) => {
  const {blurContent, handleMenuOption, isMenuOption, route, backArrow} = props;
  const navigation = useNavigation();
  // const route = useRoute();

  return (
    <Fragment>
      <View style={[styles.contentContainer, styles.container]}>
        <View style={[styles.contentContainer, styles.secondaryContainer]}>
          {backArrow ? (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={MediaAssets.ic_header_back_arrow}
                style={[styles.icon, styles.iconWidth]}
              />
            </TouchableOpacity>
          ) : null}
          <CustomText
            style={[
              styles.routeName,
              {color: blurContent ? Colors.blackPearlColor : Colors.whiteColor},
            ]}
            //   onPress={() => {
            //     navigation.goBack();
            //   }}
          >
            {props.customName ? props.customName : route.name}
          </CustomText>
        </View>

        {/* <MenuOptions /> */}
        {props.isOptionsIcon ? (
          <TouchableOpacity onPress={handleMenuOption}>
            <Image
              blurRadius={blurContent ? 70 : 0}
              source={MediaAssets.ic_more_options}
              style={[styles.icon, styles.iconWidth, styles.moreOptionsIcon]}
            />
          </TouchableOpacity>
        ) : null}
        <ProfileMenuComponent
          isMenuOption={isMenuOption}
          handleMenuOption={handleMenuOption}
          route={route}
        />
      </View>
    </Fragment>
  );
};

export default ProfileHeader;
