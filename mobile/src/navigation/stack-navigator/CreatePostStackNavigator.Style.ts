import { StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

const styles = StyleSheet.create({
    nextText : {
    color: Colors.primaryBlueColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 20,
  },
  clearAllOrReorderText : {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 12,
    marginHorizontal: 10,
  },
  reorderText : {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 12,
    marginHorizontal: 10,
  },
  headerDetailsContainer :  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: Colors.senaryThemeColor,
    fontSize: 15,
    fontFamily: 'Comfortaa-Light',
    lineHeight: 23,
    textAlign: 'center',
    width: 280,
    marginTop: 10
  }

})
export default styles