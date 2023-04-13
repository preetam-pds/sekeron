import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../resources/Colors';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  createPostTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
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
    maxWidth: 200, 
    textAlign: 'center' 
},
createPostTabBar : { 
    width: windowWidth, 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    backgroundColor: Colors.primaryThemeColor,
    paddingVertical: 15, 
    borderTopColor: Colors.darkBlueMagentaColor, 
    borderTopWidth: 2 
},
tabIconsOne : { 
    height: 20, 
    width: 20 
},
tabIconsTwo : { 
    height: 20, 
    width: 30
},
accessGallery: {
    minHeight: '40%',
    height: '100%',
    backgroundColor: Colors.secondaryThemeColor
}

  
});
export default styles;
