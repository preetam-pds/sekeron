import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const userInformationStyles = StyleSheet.create({
  containerBackground: {
    backgroundColor: Colors.primaryThemeColor,
  },
  container: {
    flex: 1,
  },
  letsGetStartedText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.monoChromaticGreenColor,
    marginTop: '12%',
    fontFamily: 'Comfortaa-Light',
  },
  enabledButton: {
    minWidth: '40%',
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  disabledButton: {
    minWidth: '50%',
    height: 45,
    backgroundColor: Colors.primarygreyishColor,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderColor: Colors.secondaryGreyColor,
  },
  otpInputContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '50%',
  },
  backIcon: {height: 10, resizeMode: 'contain', width: 10},

});
export default userInformationStyles;
