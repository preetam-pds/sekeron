import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlayContainer: {
    backgroundColor: Colors.transparentColor,
    width: width,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
  },
  flashMessageRegular: {
    color: Colors.whiteColor,
    fontSize: 14,
    fontFamily: 'Comfortaa-Light',
  },
  flashMessageHighLighted: {
    color: Colors.primaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    backgroundColor: Colors.whiteColor,
    fontSize: 12,
    margin: 2,
    borderRadius: 4,
    overflow: 'hidden',
    paddingHorizontal: 6,
  },
  buttonContainer: {
    margin: 20,
  },
  imageStyle: {
    width: 15,
    height: 15,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 10,
    zIndex: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textFollowOrNot: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
