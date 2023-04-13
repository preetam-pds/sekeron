import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
  secondaryContainer: {alignItems: 'center', fontFamily: 'Comfortaa-Regular'},
  itemContainerStyle: {borderRadius: 22},
  validInput: {
    borderColor: Colors.primaryBlueColor,
    fontFamily: 'Comfortaa-Regular',
  },
  emptyInput: {
    borderColor: Colors.quaternaryThemeColor,
  },
  errorInput: {
    borderColor: Colors.reddishPinkColor,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDownSelectedTextStyle: {
    fontSize: 16,
    color: Colors.whiteColor,
    marginLeft: 10,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDowninputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDowniconStyle: {
    width: 20,
    height: 20,
  },
  dropDownIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  placeHolder: {
    height: 59,
    width: 305,
    paddingHorizontal: 12,
    borderRadius: 24,
    borderWidth: 1,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDownStyle: {
    fontSize: 18,
    color: Colors.whiteColor,
    marginTop: 20,
  },
  dropDownContainer: {
    backgroundColor: Colors.tertiaryGreyColor,
    borderRadius: 24,
    width: 305,
    borderWidth: 0,
  },
  itemTextStyle: {
    fontSize: 16,
    color: Colors.quinaryGreyColor,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDownPlaceHolderStyle: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDownSelectedText: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Regular',
  },
  dropDownText: {
    color: Colors.secondaryGreyColor,
    marginLeft: 10,
    fontFamily: 'Comfortaa-Regular',
  },
  errorText: {color: Colors.reddishPinkColor, marginHorizontal: 8},
});
