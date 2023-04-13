import {StyleSheet,Dimensions} from 'react-native';
import Colors from '../../resources/Colors';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
    height: 22, 
    width: 22 ,
    resizeMode: 'contain'
},
tabIconsTwo : { 
    height: 20, 
    width: 30,
    resizeMode: 'contain'
},
postLengthContainerIcon: {
    backgroundColor: Colors.monoChromaticGreenColor,
    height: 12, 
    width:12,
    borderRadius: 6, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    position: "absolute", 
    zIndex: 99, 
    left: -5
},
postLengthContainerIconText: {
    color: Colors.primaryThemeColor, 
    fontSize: 9, 
    fontFamily: 'Comfortaa-Light', 
    position: 'relative', 
    top: -2
}

  
});
export default styles;
