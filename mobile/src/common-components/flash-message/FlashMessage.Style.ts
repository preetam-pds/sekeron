import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryThemeColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  overlayContainer: {
    backgroundColor: Colors.darkBlueMagentaColor,
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  flashMessageRegular: {
    color: Colors.nonaryThemeColor,
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 24,
    maxWidth: '80%',
    fontSize: 17,
  },
  flashMessageDarkGreyRegular: {
    color: Colors.secondaryGreyColor,
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 24,
    // maxWidth: '80%',
    fontSize: 17,
  },
  flashMessageHighLighted: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    lineHeight: 24,
    // maxWidth: '80%',
    paddingHorizontal: 4,
    fontSize: 17,
  },
  buttonContainer: {
    margin: 20,
  },
  imageStyle: {
    width: 115,
    height: 115,
    alignSelf: 'center',
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
