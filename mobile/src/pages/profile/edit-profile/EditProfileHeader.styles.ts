import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:40,
  },
  container: {
    justifyContent: 'space-between', 
   
  },
  secondaryContainer: {
    marginLeft: 10,
  },
  icon: {
    height: 20, 
    resizeMode: 'contain'
  },
  iconWidth: {
    width: 20, 
    marginRight:8
  },
  postImage: {
    width: 25, 
    marginLeft: 5
  },
  postName: {
    fontSize: 13, 
    color: Colors.whiteColor
  },
  moreOptionsIcon: {
    marginRight: 12
  },
  routeName:{
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    marginHorizontal:4,
  },
  submitButton:{textAlign:'right',marginHorizontal:8,color: Colors.monoChromaticGreenColor},

});

export default styles;
