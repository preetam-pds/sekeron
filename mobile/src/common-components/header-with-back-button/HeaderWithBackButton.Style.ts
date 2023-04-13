import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between', 
    marginTop: '5%',
    paddingBottom: 20
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
    color:Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
  }
});

export default styles;
