import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import homeScreenStyles from '../Home.Style';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';
import MediaAssets from '../../../assets';

const Header = () => {
  const navigation: any = useNavigation();

  return (
    <View style={homeScreenStyles.homeScreenHeaderContainer}>
      <Image
        source={MediaAssets.ic_sekeron}
        style={homeScreenStyles.sekeronLogo}
      />

      <View style={homeScreenStyles.homeScreenHeaderContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(routes.notifications);
          }}>
          <Image
            source={MediaAssets.ic_notification}
            style={homeScreenStyles.notificationAndMessageIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={MediaAssets.ic_message}
            style={homeScreenStyles.notificationAndMessageIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
