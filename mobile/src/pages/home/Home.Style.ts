import {StyleSheet, Platform} from 'react-native';

const homeScreenStyles = StyleSheet.create({
  container: {},
  homeScreenHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 20,
  },
  sekeronLogo: {width: '40%', height: 80, resizeMode: 'contain'},
  notificationAndMessageIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  contentContainerStyle: {paddingBottom: '5%'},
});
export default homeScreenStyles;
