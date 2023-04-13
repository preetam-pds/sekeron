import {StyleSheet} from 'react-native';
import Colors from '../../../../resources/Colors';

const userDetailsStyles = StyleSheet.create({
  floatingText: {
    position: 'absolute',
    backgroundColor: Colors.primaryThemeColor,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.secondaryGreyColor,
    fontFamily:'Comfortaa-Regular'
  },
  selectYourGenderText: {
    left: 25,
    top: 10,
    fontFamily: 'Comfortaa-Regular',
  },
  enterDobText: {
    left: 20,
    top: -10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  greetingText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.nonaryThemeColor,
    marginTop: 30,
  },
  whatsYourNameText: {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.secondaryGreyColor,
    marginTop: 25,
  },
  validation: {
    flexDirection: 'row',
    marginRight: 30,
  },
  focusedInput: {
    borderColor: Colors.primaryVioletColor,
    fontFamily: 'Comfortaa-Regular',
  },
  caution: {
    width: 11,
    height: 11,
    tintColor: Colors.reddishPinkColor,
    marginRight: 3,
  },
  validationMessage: {color: Colors.reddishPinkColor},
  secondaryContainer: {alignItems: 'center', fontFamily: 'Comfortaa-Regular'},
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
  dobPlaceHolder: {
    marginTop: 20,
    fontSize: 18,
    color: Colors.whiteColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Comfortaa-Regular',
  },
  calendar: {
    width: 40,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 15,
    fontFamily: 'Comfortaa-Regular',
  },
  phoneNumberInputHolder: {
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
  },
  label: {
    left: 20,
    top: 10,
    paddingVertical: 3,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Regular',
  },
  validLabel: {color: Colors.nonaryThemeColor},
  phoneInputBorder: {
    position: 'absolute',
    backgroundColor: Colors.tertiaryThemeColor,
    left: 62,
    top: 73,
    zIndex: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  countryCodeInputButton: {
    width: 70,
    height: 60,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 24,
    borderBottomStartRadius: 24,
  },
  countryCode: {
    fontSize: 16,
  },
  phoneNumberContainer: {
    width: 235,
    height: 60,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    borderTopRightRadius: 24,
    borderBottomEndRadius: 24,
  },
  phoneNumberInput: {
    fontSize: 16,
    borderColor: Colors.primaryBlueColor,
    marginLeft: 10,
    fontFamily: 'Comfortaa-Regular',
  },
  validPhoneNumber: {color: Colors.reddishPinkColor},
  inValidPhoneNumber: {color: Colors.whiteColor},
  enabledButton: {
    minWidth: '60%',
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    margin: 5,
    paddingHorizontal: 60,
  },
  disabledButton: {
    minWidth: 20,
    height: 45,
    paddingHorizontal: 60,
    backgroundColor: '#31343e',
    borderRadius: 22,
    justifyContent: 'center',
    margin: 5,
    borderColor: Colors.secondaryGreyColor,
  },
  itemContainerStyle: {borderRadius: 22},
  selectedDob: {borderColor: Colors.primaryBlueColor},
  birthdateNotSelected: {borderColor: Colors.secondaryGreyColor},
  dob: {marginLeft: 15, color: Colors.whiteColor, fontSize: 16},
  enterDobHolder: {
    marginLeft: 12,
    color: Colors.secondaryGreyColor,
    fontSize: 14,
  },
  datePicker: {
    width: 320,
    backgroundColor: Colors.primaryThemeColor,
    fontFamily: 'Comfortaa-Regular',
  },
  buttonHolder: {marginTop: 20},
  input: {
    placeholderTextColor: Colors.secondaryGreyColor,
    color: Colors.secondaryGreyColor,
    fontFamily:'Comfortaa-Regular'
  },
  validInput: {
    borderColor: Colors.primaryBlueColor,
    fontFamily: 'Comfortaa-Regular',
  },
  emptyInput: {
    borderColor: Colors.quinaryThemeColor,
  },
  inValidInput: {
    borderColor: Colors.reddishPinkColor,
    fontFamily: 'Comfortaa-Regular',
  },
  inputStyle: {
    fontSize: 16,
    color: Colors.whiteColor,
    marginLeft: 10,
    fontFamily: 'Comfortaa-Regular',
  },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: Colors.primaryThemeColor,
    paddingHorizontal: 4,
    borderColor: Colors.secondaryGreyColor,
    color: Colors.secondaryGreyColor,
    fontFamily:'Comfortaa-Regular'
  },
  validLabelStyle: {
    color: Colors.secondaryGreyColor,
    fontFamily:'Comfortaa-Regular'
  },
  inValidLabelStyle: {
    color: Colors.reddishPinkColor,
    fontFamily: 'Comfortaa-Regular',
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.secondaryGreyColor,
    marginLeft: 10,
    fontFamily: 'Comfortaa-Regular',
  },
  textErrorStyle: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
  },
});
export default userDetailsStyles;
