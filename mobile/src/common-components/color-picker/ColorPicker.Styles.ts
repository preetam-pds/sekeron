import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiaryGreyColor,
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // marginTop: 40,
    borderRadius: 10,
  },
  sliderStyle: {
    height: 8,
    width: '80%',
    borderRadius: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
  },
  previewStyle: {
    height: 55,
    borderRadius: 50,
    marginBottom: 30,
  },
  swatchStyle: {
    borderRadius: 25,
    height: 45,
    width: 45,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  selectedColorContainer: {
    height: '60%',
    width: '15%',
    marginHorizontal: 10,
    marginBottom: 15,
    borderColor: Colors.whiteColor,
    borderWidth: 1,
    borderRadius: 9,
    justifyContent: 'space-between',
  },
  colorPicker: {
    width: '75%',
  },
  shadow: {
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedSecondaryColorContainer: {
    backgroundColor: Colors.lightGreyColor,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newTextContainer: {borderTopLeftRadius: 9, borderTopRightRadius: 9},
  oldTextContainer: {borderBottomLeftRadius: 9, borderBottomRightRadius: 9},
  selectedColor: {height: '28%'},
  text: {
    color: Colors.whiteColor,
    fontSize: 12,
  },
});

export default styles;
