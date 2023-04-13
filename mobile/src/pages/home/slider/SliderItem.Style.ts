import {PlatformEnum} from '@sekeron/domain';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';
const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {height: 200, backgroundColor: Colors.whiteColor},
  profileImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderColor: Colors.primaryThemeColor,
    borderWidth: 8,
    borderRadius: 50,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  artistName: {
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold',
    color: Colors.blueShadeColor,
  },
  designation: {
    fontSize: 14,
    color: Colors.blueShadeColor,
  },
  admirationsText: {
    fontSize: 12,
    fontFamily: 'Comfortaa-Bold',
    color: Colors.whiteColor,
    marginHorizontal: 5,
  },
  secondaryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: Platform.OS === PlatformEnum.ios ? 15 : 5,
    opacity: 0.7,
  },

  artistOfTheWeek: {
    fontSize: 10,
    fontFamily: 'Comfortaa-Bold',
    color: Colors.greyishWhiteColor,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    width: 40,
    borderRadius: 20,
    opacity: 0.7,
  },
  dotStyle: {
    backgroundColor: Colors.whiteColor,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  activeDotStyle: {
    backgroundColor: Colors.whiteColor,
    width: 15,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
  },
  artistOfTheWeekContainer: {
    position: 'absolute',
    top: -10,
    left: 5,
  },
  paginationStyle: {position: 'absolute', bottom: -20},
  position: {},
  sliderContent: {
    width: 80,
    height: 80,
  },
  sliderContentText: {
    fontSize: 18,
    fontFamily: 'Comfortaa-Bold',
    marginTop: 10,
  },
  sliderTextColor: {
    color: Colors.lightGreenShadeColor,
  },
  sliderBlogTextColor: {
    color: Colors.whiteColor,
  },
});
export default styles;
