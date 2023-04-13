import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
    paddingHorizontal:20
  },
  secondaryContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
  },
  createEventText: {
    color: Colors.senaryThemeColor,
    textAlign: 'center',
  },
  postContainer: {
    marginTop: 4,
  },
  createPostNotificationImage: {
    width: 125,
    height: 125,
    margin:20
  },
  createPostNotifcationText:{
    color: Colors.senaryThemeColor, textAlign: 'center',
    lineHeight:30
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
  },
  buttonSpacing: {
    margin: 1,
  },
});
export default styles;
