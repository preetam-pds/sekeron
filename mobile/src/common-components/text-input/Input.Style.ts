import { StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

const inputStyles = StyleSheet.create({
  input: {
    position: 'absolute',
    backgroundColor: Colors.tertiaryThemeColor,
    left: 20,
    top: 10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.nonaryThemeColor,
  },
});
export default inputStyles;