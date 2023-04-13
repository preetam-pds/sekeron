import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    paddingHorizontal: 40,
    padding: 12,
  },
  linearGradientIsHorizontalLeftCurved: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    padding: 12,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  buttonText: {
    color: Colors.whiteColor,
  },
  buttonTextGrey: {
    color: Colors.nonaryThemeColor,
  },
  disableButtonText: {
    color: Colors.nonaryThemeColor,
    paddingHorizontal: 40,
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: Colors.greyOutlineVariantColor,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  disableButtonFollowingText: {
    color: Colors.nonaryThemeColor,
    paddingHorizontal: 26,
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: Colors.greyOutlineVariantColor,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  darkGreyButtonText: {
    color: Colors.nonaryThemeColor,
    textAlign: 'center',
    padding: 12,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  geryOutlinedButtonText: {
    color: Colors.nonaryThemeColor,
    paddingHorizontal: 48,
    textAlign: 'center',
    alignItems:'center',
    borderWidth: 2,
    padding: 10,
    borderColor: Colors.greyOutlineVariantColor,
    borderRadius:18
  },
  geryOutlinedSmallButtonText: {
    color: Colors.whiteColor,
    paddingHorizontal: 12,
    textAlign: 'center',
    alignItems:'center',
    borderWidth: 1.5,
    padding: 10,
    borderColor: Colors.greyOutlineVariantColor,
    borderRadius:18
  },
  linearlessRadiusGradient:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 60,
    padding: 12,
  },
});
