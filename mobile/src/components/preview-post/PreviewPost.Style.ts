import { StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent:"center", 
        alignItems: 'center'
    },
    descriptionText: {
        color: Colors.secondaryGreyColor,
        fontSize: 14,
        fontFamily: 'Comfortaa-Light',
        margin: 20,
        marginBottom: 30,
        lineHeight: 20,
      },
      titleText: { 
        color: Colors.nonaryGreyColor,
        fontSize: 16,
        fontFamily: 'Comfortaa-Light',
        margin: 20,
        lineHeight: 25,
      },
      inputContainer: {
        borderBottomColor: Colors.blackColorShade,
        marginBottom: 30,
        borderBottomWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      successText: {
        color: Colors.whiteColor,
        fontSize: 18,
        fontFamily: 'Comfortaa-Light',
        lineHeight: 23,
        textAlign: 'center',
      },
      succesText:{color:Colors.whiteColor}
})
export default styles