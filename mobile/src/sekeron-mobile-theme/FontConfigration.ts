import {Platform} from 'react-native';

export const fontConfig : any = {
  web: {
    light: {
      fontFamily: 'Comfortaa-Light',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'Comfortaa-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Comfortaa-Medium',
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: 'Comfortaa-SemiBold',
      fontWeight: '600',
    },
    Bold: {
      fontFamily: 'Comfortaa-Bold',
      fontWeight: '700',
    },
  },
  ios: {
    light: {
      fontFamily: 'Comfortaa-Light',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'Comfortaa-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Comfortaa-Medium',
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: 'Comfortaa-SemiBold',
      fontWeight: '600',
    },
    Bold: {
      fontFamily: 'Comfortaa-Bold',
      fontWeight: '700',
    },
  },
  android: {
    light: {
      fontFamily: 'Comfortaa-Light',
      fontWeight: '300',
    },
    regular: {
      fontFamily: 'Comfortaa-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Comfortaa-Medium',
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: 'Comfortaa-SemiBold',
      fontWeight: '600',
    },
    Bold: {
      fontFamily: 'Comfortaa-Bold',
      fontWeight: '700',
    },
  },

  customVariant: {
    fontFamily: Platform.select({
      ios: 'Comfortaa-Regular',
      default: 'Comfortaa-Regular',
      android:'Comfortaa-Regular'
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  }
};
