import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  stayButton: {
    height: 40,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonWidth: {
    minWidth: '72%',
  },
  userInfoButtonWidth: {
    minWidth: '60%',
  },
  stayText: {justifyContent: 'center', color: Colors.whiteColor, fontSize: 18 , fontFamily:'Comfortaa-Regular'},
  cancelButton: {
    minWidth: 25,
    height: 50,
    paddingHorizontal: 30,
    backgroundColor: Colors.primarygreyishColor,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
  },
  cancelText: {justifyContent: 'center', color: Colors.secondaryGreyColor},
  borderGradient : {
    margin: 1,
    backgroundColor: Colors.darkBlueMagentaColor,
    width: '98%',
    height: '90%',
    borderRadius: 22,
    alignItems: 'center',
  },
  gradientText: {
    justifyContent: 'center', 
    fontSize: 18 , 
    fontFamily:'Comfortaa-Bold',
    color: Colors.whiteColor
  },
  showBorder: {
    backgroundColor: Colors.primaryThemeColor, 
    borderColor: Colors.reddishPinkColor, 
    borderWidth: 2, 
    paddingVertical: 7, 
    borderRadius: 18, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  cancelTextNew: {
    color: Colors.reddishPinkColor, 
    fontFamily: 'Comfortaa-Bold', 
    fontSize: 18
  }
});
export default styles;
