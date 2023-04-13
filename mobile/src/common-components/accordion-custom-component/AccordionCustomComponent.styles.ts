import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
  accordionContainer: {
    margin: 8,
    backgroundColor: Colors.secondaryThemeColor,
    padding: 4,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    borderRadius: 4,
    alignItems: 'center',
  },
  accordiontext: {
    color: Colors.nonaryThemeColor,
    fontSize: 12,
  },
  childrenStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordionDropDownImage:{
    width: 20,
    height: 12,
  }
});
