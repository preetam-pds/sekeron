import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../resources/Colors';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  createPostTextContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
  },
  createAPostTextSecondaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer:{width: '100%'},
  createAPostText: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 18,
    marginVertical: 5,
  },
  uploadMediaText: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    maxWidth: 230,
    textAlign: 'center',
  },
  createPostTabBar: {
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primaryThemeColor,
    paddingVertical: 15,
    borderTopColor: Colors.darkBlueMagentaColor,
    borderTopWidth: 2,
  },
  tabIconsOne: {
    height: 20,
    width: 20,
  },
  tabIconsTwo: {
    height: 20,
    width: 30,
  },
  accessGallery: {
    minHeight: '40%',
    height: '100%',
    backgroundColor: Colors.secondaryThemeColor,
  },
  selectedMediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  selectedImages: {
    width: windowWidth,
    height: 400,
    marginVertical: 5 ,
},
playerContainerStyle : {
    backgroundColor:  Colors.tertiaryThemeColor,
    position: 'absolute',
    width: windowWidth,
        height: 180,
        justifyContent: 'center',
},
playerTrackStyle : {
    backgroundColor: Colors.primaryBlueColor,
    height: 3
},
createPostViewContainer : {
    justifyContent:'center', 
    alignItems: 'center', 
    alignSelf: 'center',
},
  addNewTextCanvas: {
    color: Colors.primaryVioletColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
  },
  webViewContainerStyle: {
    width: '100%',
    height: 556,
    backgroundColor: Colors.primaryThemeColor,
  },
  webViewContainerBackground: {backgroundColor: Colors.primaryThemeColor},
});
export default styles;
