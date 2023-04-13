import { PlatformEnum } from '@sekeron/domain';
import { Platform, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiaryGreyColor,
    width: 140,
    height: 110,
    position: 'absolute',
    top:Platform.OS===PlatformEnum.ios?80:40,
    right: 10,
    overflow:'hidden',
    borderRadius: 6,
    alignItems:'center',
    justifyContent: 'center',
    zIndex:1
  },
  subContainer:{
    backgroundColor: Colors.tertiaryGreyColor,
    width: 140,
    height: 85,
    position: 'absolute',
    top: Platform.OS===PlatformEnum.ios?80:40,
    right: 10,
    overflow:'hidden',
    borderRadius: 6,
    alignItems:'center',
    justifyContent: 'center',
    zIndex:1
  },
  menuItemButton: {
    width: '100%',
    alignItems: 'flex-end',
  },
  menuItem: {
    color: Colors.quinaryGreyColor,
    margin: 8,

  },
  profileName: {
    marginRight: 10,
    width: '100%',
    color: Colors.whiteColor,
  },
});
export default styles;
