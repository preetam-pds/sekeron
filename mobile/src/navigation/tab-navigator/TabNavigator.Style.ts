import {StyleSheet} from 'react-native'
import Colors from '../../resources/Colors';

const tabNavigatorStyles = StyleSheet.create({
  tabNavigationContainer: {flex: 1},
  tabBar: {
    height: 60,
    elevation: 4,
    backgroundColor: Colors.primaryThemeColor,
    position: 'relative',
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  activeTab: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  tabBarBorder: {
    height: 2,
    width: '100%',
    position: 'absolute',
    bottom: 60,
  },
});
export default tabNavigatorStyles;