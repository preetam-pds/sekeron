import {MD3LightTheme, configureFonts} from 'react-native-paper';
import Colors from '../resources/Colors';
import {fontConfig} from './FontConfigration';

export const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  fonts: configureFonts({config: fontConfig, isV3: false}),
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
    Colors,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Comfortaa-Regular',
      fontSize: 16,
    },
    body: {
      fontFamily: 'Comfortaa-Regular',
      fontSize: 16,
    },
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },
};
