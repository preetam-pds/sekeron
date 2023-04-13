import { StyleSheet , Dimensions} from "react-native";
import Colors from "../../resources/Colors";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    imageGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: windowWidth,
        justifyContent: 'flex-start',
        marginHorizontal: 15
      },
      cameraIconContainer : {
        flex: 3,
        width: windowWidth / 3.5,
        height: windowWidth / 3.5,
        backgroundColor: Colors.darkBlueMagentaColor,
        marginVertical: 5,
        marginHorizontal: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      cameraIcon: { 
        height: 20, 
        width: 20 ,
        resizeMode: 'contain'
    },
    images: {
        width: windowWidth / 3.5,
        height: windowWidth / 3.5,
        marginVertical: 5,
        marginHorizontal: 5
      },
      videoIcon: {
        height: 20, 
        width: 30,
        resizeMode: 'contain'
      },
      addBorder: {
      borderColor: Colors.monoChromaticGreenColor, 
      borderWidth: 3
    },
    selectedNumberContainer: {
      width: 25, 
      height:25, 
      backgroundColor: Colors.monoChromaticGreenColor, 
      borderRadius: 13,  
      position: 'absolute', 
      top: 10, 
      left: 10, 
      zIndex: 999, 
      justifyContent:'center', 
      alignItems: 'center'
    },
    selectedNumberText : {
      fontSize: 13, 
      fontFamily: 'Comfortaa-Bold', 
      color: Colors.darkBlueMagentaColor,  
      position: 'relative', 
      top: -2
    }
})