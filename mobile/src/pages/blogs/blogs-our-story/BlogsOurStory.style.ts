import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  container: {margin: 20, position: 'relative'},
  ourStoryImage: {width: '100%', height: 200},
  ourStoryLinearGradient: {height: 220, width: '100%', position: 'relative'},
  ourStoryContentContainer: {
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  ourStoryText: {
    color: Colors.primaryThemeColor,
    backgroundColor: Colors.whiteColor,
    padding: 6,
    paddingHorizontal: 10,
    fontFamily: 'Comfortaa-Light',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    overflow: 'hidden',
  },
  blogTitleContainer: {
    width: '50%',
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  ourStoryBlogText: {
    color: Colors.blueShadeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 13,
    textAlign: 'justify',
  },
  ourStoryFooterContainer: {position: 'absolute', bottom: 20, right: 15},
  ourStoryFooterSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ourStoryReadNowtext: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightArrowWhiteIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.whiteColor,
  },
});
export default styles;
