import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryThemeColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  secoundContainer: {alignSelf: 'center'},
  subContainer: {flexDirection: 'row', alignItems: 'center'},
  overlayContainer: {
    backgroundColor: Colors.darkBlueMagentaColor,
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  flashMessageRegular: {
    color: Colors.denaryGreyColor,
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 24,
    maxWidth: '80%',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
  },
  flashMessageHighLighted: {
    color: Colors.nonaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: '80%',
    fontSize: 12,
  },
  buttonContainer: {
    margin: 20,
  },
  imageOptions: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    //   alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 2,
  },
  imageSubContainer: {
    width: 35,
    height: 35,
    marginVertical: 6,
    marginHorizontal: 14,
  },
  imageCoverOrProfile: {
    width: 75,
    height: 75,
    alignSelf: 'center',
  },
});
