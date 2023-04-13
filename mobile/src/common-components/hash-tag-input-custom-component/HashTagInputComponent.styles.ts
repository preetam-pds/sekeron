import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 60,
  },
  wrapInput: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    marginTop: 20,
    height: 59,
    width:'100%',
    paddingHorizontal: 26,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },
  label: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
  textError: {
    color: Colors.reddishPinkColor,
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'Comfortaa-Bold',
  },
  wrapSelectItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginTop: 12,
    marginRight: 8,
    flexDirection: 'row',
    borderWidth: 0,
    borderRadius: 14,
    padding: 2,
    backgroundColor: Colors.primaryBlueColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  selectedTextItem: {
    marginLeft: 5,
    alignItems: 'center',
    fontSize: 16,
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
  },
});
