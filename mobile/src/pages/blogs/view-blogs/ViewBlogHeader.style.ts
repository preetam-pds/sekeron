import { PlatformEnum } from '@sekeron/domain';
import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between', 
    marginTop: '4%'
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
  menuItemButton: {
    width: '100%',
    alignItems: 'flex-end',
  },
  menuItem: {
    color: Colors.quinaryGreyColor,
    margin: 8,
  },
  overLayConatiner:{
    backgroundColor: Colors.tertiaryGreyColor,
    width: 200,
    height: 120,
    position: 'absolute',
    top: Platform.OS === PlatformEnum.ios ? 80 : 40,
    right: 10,
    overflow: 'hidden',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  }
});

export default styles;
