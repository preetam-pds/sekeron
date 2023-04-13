import { StyleSheet } from "react-native";
import Colors from "../../../resources/Colors";

export const styles = StyleSheet.create({
    container:{flex: 1},
    textHeight:{height: 100,width:298},
    hashContainer:{width: 300, marginVertical: 12},
    dropDownContainer:{width: 300},
    submitButton:{textAlign:'right',marginHorizontal:8,color: Colors.monoChromaticGreenColor},
    descriptionContainer: {
        height: 8,
        width: 288,
        flex:1,
        backgroundColor: Colors.primaryThemeColor,
        overflow: 'hidden',
        position: 'relative',
        left: 5,
        top: -9,
        zIndex: -22,
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28,
      },
      progressBar: {
        height: '100%',
        borderBottomColor: Colors.primaryBlueColor,
        borderBottomWidth: 24,
        borderBottomLeftRadius: 48,
        position: 'absolute',
      },
})