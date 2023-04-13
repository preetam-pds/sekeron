import { PlatformEnum } from '@sekeron/domain';
import {Platform, StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const tabBarHeight = Platform.OS == PlatformEnum.ios ? 60 : 70;
const headerHeight = Platform.OS == PlatformEnum.ios ? 155 : 170;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  header: {
    height: headerHeight,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    // backgroundColor: Colors.primaryThemeColor,
  },
  label: {
    fontSize: 10.5,
  },
  tab: {
    elevation: 1,
    shadowOpacity: 0,
    backgroundColor: Colors.primaryThemeColor,
    height: tabBarHeight,
  },
  indicator: {backgroundColor: Colors.primaryThemeColor, height: 0, width: 0},
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
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: -30,
    right: 0,
    height: '100%',
    width: '100%',
  },

  dropDownthinArrowContainer: {
    margin: 8,
    backgroundColor: Colors.secondaryThemeColor,
    padding: 4,
    borderRadius: 4,
    height: '50%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    borderRadius: 4,
    alignItems: 'center',
  },
  dropDownthinArrowtext: {
    color: Colors.nonaryThemeColor,
    fontSize: 12,
  },
  childrenStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownthinArrowImage: {
    width: 15,
    height: 10,
    marginHorizontal: 4,
  },
  calendarIcon: {
    width: 25,
    height: 25,
  },
  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: Colors.primaryThemeColor,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.pentacementColor,
  },
  divider: {width: 12},
  dropdown2BtnStyle: {
    flex: 1,
    height: 35,
    backgroundColor: Colors.tertiaryThemeColor,
    borderRadius: 6,
    overflow: 'hidden',
    margin: 2,
  },
  dropdown2BtnTxtStyle: {color: Colors.pentacementColor, textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: Colors.primaryThemeColor},
  dropdown2RowStyle: {
    backgroundColor: Colors.primaryThemeColor,
    borderBottomColor: Colors.primaryThemeColor,
  },
  dropdown2RowTxtStyle: {color: Colors.pentacementColor, textAlign: 'left'},
  filterIconContainer: {
    width: 40,
    height: 40,
    left: 0,
    top: tabBarHeight - (Platform.OS == PlatformEnum.ios ? 5 : 0),
    marginVertical: 4,
    backgroundColor: Colors.primaryThemeColor,
    padding: 3,
  },
  filterImage: {width: '100%', height: '100%', resizeMode: 'cover'},
});
