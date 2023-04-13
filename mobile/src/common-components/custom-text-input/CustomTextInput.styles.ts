import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
  customTextInput: {
    marginTop: 20,
    height: 59,
    width: 305,
    paddingHorizontal: 12,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputTextStyle: {
    fontSize: 16,
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    paddingHorizontal: 8,
  },
  inputTextLabelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -15,
    left: 10,
    backgroundColor: Colors.primaryThemeColor,
    paddingHorizontal: 4,
    borderColor: Colors.secondaryGreyColor,
    color: Colors.nonaryGreyColor,
    fontFamily: 'Comfortaa-Regular',
  },
  inputTextPlaceHolderStyle: {
    fontSize: 16,
    color: Colors.secondaryGreyColor,
    marginLeft: 26,
    fontFamily: 'Comfortaa-Regular',
  },
  errorText: {color: Colors.reddishPinkColor, marginHorizontal: 8},
});
