import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = ({label, isFocused}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    textLabel: {
      padding: 10,
      marginVertical: 10,
      paddingHorizontal: 18,
      borderRadius: 15,
      textAlign: 'center',
      overflow: 'hidden',
      alignItem: 'center',
      width: label?.length >= 3 ? '100%' : 70,
      backgroundColor: isFocused ? Colors.whiteColor : Colors.primaryThemeColor,
      color: isFocused ? Colors.primaryThemeColor : Colors.whiteColor,
    },
  });
export default styles;
