import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  colorPickerContainer: {
    position: 'absolute',
    right: 25,
  },
  backgroundColorPicker: {top: '7%', zIndex: 999},
  textColorPicker: {
    top: 170,
    zIndex: 999,
  },
  textEditorContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primaryThemeColor,
    padding: 15,
    alignItems: 'flex-end',
  },
  backgroundColorPickerBtn: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 999,
  },
  colorPickerIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 4,
  },
  toolBarContainer: {
    backgroundColor: Colors.darkBlueMagentaColor,
    marginTop: 5,
    paddingVertical: 5,
    width: '100%',
  },
  textOptions: {
    color: Colors.secondaryGreyColor,
    margin: 5,
    fontFamily: 'Comfortaa-Bold',
  },
  toolBarOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  textColorPickerButton: {alignItems: 'center'},
  textStyle: {color: Colors.whiteColor},
  dropDown: {
    backgroundColor: Colors.secondaryThemeColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSizeDropDown: {width: 35, height: 40},
  alignmentDropDown: {width: 30, height: 40},
  fontNameDropDown: {width: 75, height: 40},
  fontName: {
    width: '100%',
    textAlign: 'center',
  },
  textStyleOptions: {flexDirection: 'row', marginTop: 10},
  dropDownContainer: {flexDirection: 'column', alignItems: 'center'},
  scrollViewContainer: {
    height: 70,
    backgroundColor: Colors.secondaryThemeColor,
  },
  icon: {width: 20, height: 20, resizeMode: 'contain'},
  activeIcon: {tintColor: Colors.reddishPinkColor},
  iconMargin: {
    marginLeft: 10,
  },
  done: {
    color: Colors.primaryVioletColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
  },
  textEditorSecondaryContainer: {
    width: '100%',
  },

  textEditorStyle: {
    borderWidth: 1,
    borderColor: Colors.primaryVioletColor,
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderStyle: 'dashed',
  },

  overlayContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000066',
    zIndex: 999,
  },
});
export default styles;
