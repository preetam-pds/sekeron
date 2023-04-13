import { StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.quaternaryThemeColor,
      borderRadius: 35,
      height: 220,
      width: 350,
      alignItems: 'center',
      shadowColor: Colors.primaryThemeColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      justifyContent: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    overlayStyle: {
      backgroundColor: "transparent", 
      elevation: 0, 
      shadowOpacity: 0 
    },
    cancelTitle: {
      color: Colors.whiteColor , 
      fontFamily: 'Comfortaa-Bold', 
      fontSize: 18
    },
    buttonContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '80%', 
      marginTop: 30
    }
  });

  export default styles