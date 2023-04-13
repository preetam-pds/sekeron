import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    marginVertical: 0,
  },
  modalContent: {
    paddingTop: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '90%',
    paddingBottom: 20,
  },
  contentAlignment: {
    display: 'flex',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: Colors.nonaryThemeColor,
    borderRadius: 3,
    alignSelf: 'center',
  },
  secondaryContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#bbb',
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  inputPlaceHolder: {
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    borderRadius: 10,
    height: 40,
    padding: 5,
    fontSize: 15,
    color: Colors.whiteColor,
  },
  flatListContainer: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  countryCodeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical:4
  },
  countryCodeTextStyle: {
    fontSize: 20,
    textAlign: 'left',
  },
  countryCode: {color: Colors.whiteColor, marginLeft: 15},
  countryCodeWidth: {
    width: '18%',
  },
  countryCodeInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 50,
    height: 45,
    backgroundColor: Colors.tertiaryThemeColor,
  },
  searchImage: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  countryCodeTextInput: {
    height: 40,
    backgroundColor: Colors.tertiaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    color: Colors.secondaryGreyColor,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
export default styles;