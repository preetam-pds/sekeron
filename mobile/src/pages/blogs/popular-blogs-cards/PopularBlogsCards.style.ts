import { StyleSheet } from "react-native";
import Colors from "../../../resources/Colors";


export const styles = StyleSheet.create({
    headerText: {
        color: Colors.whiteColor,
        padding: 10,
        fontSize: 16,
        alignSelf: 'flex-start',
        fontFamily: 'Comfortaa-Bold',
      },
      flatListContainer: {
        justifyContent: 'space-between'
      },
      flatListcolumnWrapperStyle: {
        justifyContent: 'space-around',
      },
      centeredView: {
        // justifyContent: 'center',
        // marginVertical: 10,
      },
      modalView: {
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        marginVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
      },
      cardImagesLinearGradent: {
        height: 160,
        width: '100%',
        margin: 4,
        borderRadius: 10,
        borderWidth: 4,
      },
      cardImagesLinearGradentSelected: {
        width: 170, height: 130,
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      imageBackgroundStyle: {
        height: 130,
      },
      imageLinearGradentBlurEffect: {
        height: 140,
        width: '100%',
        position: 'relative',
      },
      container: {
        alignItems: 'flex-start',
        padding: 4, marginVertical: 8
      },
      projectImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      eventTypeContainer: {
        flex:1,
        position: 'absolute',
        backgroundColor: Colors.secondaryThemeColor,
      },
      contentContainer: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        width: 170,
        height:40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      textSize: {
        fontSize: 12,
        marginVertical: 4,
        marginHorizontal:8,
        textAlign: 'left',
        alignItems: 'center',
        color:Colors.nonaryThemeColor,
        fontFamily:'Comfortaa-Bold'
      },
      textColor: {color: Colors.whiteColor, fontFamily: 'Comfortaa-Bold'},
      
      profileName: {
        color: Colors.nonaryThemeColor,
        // marginLeft: 5,
      },
      readNowText: {
        color: Colors.primaryBlueColor,
        textAlign:'center',
        margin:10,
        fontFamily:'Comfortaa-Bold'
    
      },
      eventNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
      },
      eventName: {
        fontSize: 13,
      },
      eventDate: {
        color: Colors.nonaryThemeColor,
        // marginLeft: 10,
      },
      avatharContainer: {
        marginHorizontal: 12,
        padding: 7,
      },
      favouriteIcon: {position: 'absolute', bottom: 5, right: -20},
      Icon: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 4,
      },
      saveIcon: {
        marginRight: 30,
      },
      blogEventsDescription:{
        alignItems: 'flex-start',
        backgroundColor: Colors.primaryThemeColor,
        width: 170,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      blogsReadNowConatiner:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      readNowSubContainer:{
        backgroundColor: Colors.senaryGreyColor,
        width: 170,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignSelf: 'center',
      }

})