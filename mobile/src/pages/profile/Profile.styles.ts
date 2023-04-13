import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const tabBarHeight = 48;
const headerHeight = 350;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: headerHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: Colors.primaryThemeColor,
  },
  label: {fontSize: 16, color: Colors.secondaryGreyColor},
  tab: {
    elevation: 1,
    shadowOpacity: 0,
    backgroundColor: Colors.primaryThemeColor,
    height: tabBarHeight,
  },
  indicator: {backgroundColor: Colors.primaryThemeColor},
  spinnerLoaderAndroid: {
    backgroundColor: '#eee',
    height: 38,
    width: 38,
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: -50,
    position: 'absolute',
  },
  blurContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: -30,
    right: 0,
    height: '100%',
    width: '100%',
  }
});
