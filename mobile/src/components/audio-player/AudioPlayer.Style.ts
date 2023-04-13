import { StyleSheet } from "react-native"
import Colors from "../../resources/Colors"

const styles = StyleSheet.create({
    muteImage: {
      height: 20, 
      width: 20
    },
    sliderContainer: {
      width: '70%', 
      alignSelf: 'center'
    },
    videoDuration: {
      color: Colors.nonaryThemeColor,
      fontFamily: 'Comfortaa-Light',
    },
    volumeIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
   
    controlContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }
  })

  export default styles