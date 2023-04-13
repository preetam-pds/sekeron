import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const windowWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 70,
    // flex: 1,
    width: windowWidth,
  },
  secoundaryContainer: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tertiaryContainer: {flex: 0.7},
  dropDownContainer: {flexDirection: 'row', alignContent: 'center'},

  dropDownthinArrowImage: {
    width: 15,
    height: 10,
    marginHorizontal: 4,
  },

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
  calanderOpenIcon:{alignContent: 'flex-start', margin: 8},
  calanderImageContainer:{width: 25, height: 25},
  calanderImageSubContainer:{width: '100%', height: '100%'},
});
