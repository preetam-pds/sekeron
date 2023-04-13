import {StyleSheet} from 'react-native';
import Colors from '../../../../resources/Colors';

const registerStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryThemeColor,
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sekeronLogoContainer: {marginTop: '20%'},
  emailInputFieldContainer: {
    marginTop: '16%',
  },
  footerContainer: {
    justifyContent: 'flex-end',
  },
  otpScreenFooterContainer: {
    marginTop: '7%',
  },
  verifyEmailScreenFooterContainer: {marginTop: '22%'},
  joinedAlreadytext: {
    color: Colors.nonaryThemeColor,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  enabledButton: {
    minWidth: '60%',
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  disabledButton: {
    minWidth: '50%',
    height: 45,
    paddingHorizontal: 60,
    backgroundColor: Colors.primarygreyishColor,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderColor: Colors.secondaryGreyColor,
  },
  socialMediaLogoHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
  },
  loginHereText: {color: Colors.primaryBlueColor},
  socialMediaLoginIcon: {marginHorizontal: '05%'},
  verifyButtonContainer: {
    marginTop: '15%',
  },
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
    fontFamily:'Comfortaa-Regular'
  },
  validInput: {
    borderColor: Colors.secondaryGreyColor,
    fontFamily:'Comfortaa-Regular'
  },
  inValidInput: {
    borderColor: Colors.reddishPinkColor,
    fontFamily: 'Comfortaa-Regular',
  },
  focusColor: {
    color: 'blue',
    borderRightColor: 'blue',
    borderLeftColor: 'blue',
  },
  inputStyle: {
    fontSize: 16,
    color: Colors.whiteColor,
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
    marginLeft: 26,
    fontFamily: 'Comfortaa-Regular',
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
  sekeronLogoImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  }
});

export default registerStyle;
