import { PlatformEnum } from "@sekeron/domain";
import { Platform, StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

const styles = StyleSheet.create({

    createNewPostOrProjectContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    centeredView: {
      flex: 1,
      width: '44%',
      height:'15%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      overflow: 'hidden',
      bottom: Platform.OS == PlatformEnum.ios ? 98 : 62,
      backgroundColor:Colors.transparentColor,
    },
    createNewTextStyle: {
      color: Colors.whiteColor,
      margin: 10,
    },
    createNewImageStyle: {
      width: 30,
      height: 30,
      margin: 10,
    },
    modalStyle: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      backgroundColor: Colors.secondaryThemeColor,
    },
  });

  export default styles