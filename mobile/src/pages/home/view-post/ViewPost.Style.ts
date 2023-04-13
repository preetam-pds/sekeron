import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  container: {marginTop: '0%'},
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  profileImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  textSize: {
    fontSize: 11,
  },
  textMargin: {marginLeft: 10},
  profileName: {
    fontSize: 12,
    color: Colors.nonaryThemeColor,
  },
  followText: {
    color: Colors.primaryVioletColor,
  },
  postedDuration: {
    color: Colors.secondaryGreyColor,
  },
  caption: {
    color: Colors.senaryThemeColor,
    textAlign: 'left',
    marginHorizontal: 15,
    marginTop: 5,
    fontSize: 14,
    marginBottom: 10,
  },
  contentContainerStyle: {
    paddingBottom: '40%',
    marginTop: 10,
  },
});
export default styles;
