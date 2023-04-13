import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiaryGreyColor,
    width: 200,
    height: 120,
    position: 'absolute',
    top: 55,
    right: 10,
    borderRadius: 6,
    justifyContent: 'space-around',
  },
  menuItemButton: {
    width: '100%',
    alignItems: 'flex-end',
  },
  menuItem: {
    color: '#ccd0db',
    marginRight: 8,
  },
  profileName: {
    marginRight: 10,
    width: '100%',
    color: Colors.whiteColor,
  },
});
export default styles;
