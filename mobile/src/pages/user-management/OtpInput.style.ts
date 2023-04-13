import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const otpInputStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryThemeColor,
    alignItems: 'center',
  },
  userDetailsContainerMargin: {marginTop: '5%'},
  registrationContainerMargin: {marginTop: '7%'},
  enterTheCodeText: {marginLeft: 10},
  instructionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: Colors.secondaryGreyColor,
    textAlign: 'center',
    fontSize: 16,
  },
  name: {
    color: Colors.nonaryThemeColor,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Comfortaa-Light',
    marginBottom: '8%',
  },
  editText: {
    color: Colors.primaryBlueColor,
    textAlign: 'center',
    fontSize: 14,
  },
  editIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: Colors.primaryBlueColor,
  },
  editBtn: {
    marginLeft: 5,
  },
  otpInput: {
    justifyContent: 'space-around',
    width: '85%',
    marginTop: '5%',
  },
  otpCell: {
    width: 56,
    height: 59,
    padding: 10,
    fontSize: 24,
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: Colors.secondaryGreyColor,
    textAlign: 'center',
    borderRadius: 22,
    color: Colors.whiteColor,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Comfortaa-light',
  },
  dash: {
    color: Colors.secondaryGreyColor,
  },
  emptyOtpCell: {borderColor: Colors.secondaryGreyColor},
  focusCell: {
    borderColor: Colors.primaryBlueColor,
  },
  resendOtp: {
    color: Colors.primaryBlueColor,
    textAlign: 'center',
    marginTop: 10,
  },
  resendText: {
    color: Colors.secondaryGreyColor,
    textAlign: 'center',
    marginTop: 10,
  },
  resendOtpContainer: {
    marginTop: '8%',
  },
  sendTextHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  sendText: {
    color: Colors.primaryBlueColor,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
    color: Colors.secondaryGreyColor,
    fontSize: 18,
    fontFamily: 'Comfortaa-Bold',
  },
  sendCodeText: {
    marginTop: 10,
    alignItems: 'center',
  },
  backButton: {height: 20, resizeMode: 'contain', width: 20},
  backButtonContainer: {position: 'absolute', top: '-45%', left: 20},
});
export default otpInputStyles;
