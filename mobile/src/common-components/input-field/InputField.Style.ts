import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const InputStyle = StyleSheet.create({
  inputContainer: {
    marginTop: '10%',
  },
  inputSecondaryContainer: {alignItems: 'center', justifyContent: 'center'},
  input: {
    marginTop: 20,
    height: 59,
    width: 305,
    paddingHorizontal: 12,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    placeholderTextColor: Colors.secondaryGreyColor,
    color: Colors.secondaryGreyColor,
  },
  validInput: {
    borderColor: Colors.secondaryGreyColor,
  },
  inValidInput: {
    borderColor: Colors.reddishPinkColor,
  },
  focusColor: {
    color: 'blue',
    borderRightColor: 'blue',
    borderLeftColor: 'blue',
  },
  inputStyle: {
    fontSize: 16,
    color: Colors.whiteColor,
  },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: Colors.primaryThemeColor,
    paddingHorizontal: 4,
    borderColor: Colors.secondaryGreyColor,
    color: Colors.secondaryGreyColor,
  },
  validLabelStyle: {
    color: Colors.secondaryGreyColor,
  },
  inValidLabelStyle: {
    color: Colors.reddishPinkColor,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.secondaryGreyColor,
    marginLeft: 26,
  },
  textErrorStyle: {
    fontSize: 16,
  },
  errorMsg: {
    marginRight: 5,
    resizeMode: 'contain',
    width: 15,
    height: 15,
  },
  validationContainer: {flexDirection: 'row', alignItems: 'center', margin: 10},
  validationErrorText: {color: Colors.reddishPinkColor},
});
export default InputStyle;
