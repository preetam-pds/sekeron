import { StyleSheet } from "react-native";
import Colors from "../../../../resources/Colors";

export const styles = ({label, isFocused}) =>
StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // borderBottomColor: !isFocused ? Colors.senaryBlueColor : Colors.secondaryVioletColor,
    borderBottomWidth: 0.6,
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  textLabel: {
    padding: 12,
    textAlign: 'center',
    overflow: 'hidden',
    alignItem: 'center',
    width: label?.length >= 3 ? '100%' : 70,
    color: isFocused ? Colors.whiteColor : Colors.secondaryGreyColor,
  },
});