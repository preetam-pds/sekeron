import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  blogsContainer: {flex: 1},
  blogsInputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 45,
    backgroundColor: Colors.tertiaryThemeColor,
  },
  blogsSerachIcon: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  blogsSerachTextInput: {
    height: 40,
    backgroundColor: Colors.tertiaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    color: Colors.secondaryGreyColor,
    width: '100%',
  },
  selectCategoryContainer: {marginHorizontal: 20},
  selectCategory: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 12,
    marginVertical: 10,
  },
  selectCategoryItem: {
    flexDirection: 'row',
    margin: 3,
    flexWrap: 'wrap',
  },
  selectCategoryText: {
    color: Colors.senaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 12,
    borderRadius: 15,
    borderWidth: 1,
    padding: 6,
    textAlign: 'center',
    paddingHorizontal: 12,
    borderColor: Colors.senaryThemeColor,
    margin: 3,
  },
});
export default styles;
