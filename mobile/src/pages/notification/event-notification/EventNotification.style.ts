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
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
  },
  createEventNotificationText: {
    color: Colors.senaryThemeColor,
    textAlign: 'center',
    lineHeight:30
  },
  eventContainer: {
    marginTop: 4,
  },
  createEventImage: {
    width: 125,
    height: 125,
    margin:20
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryThemeColor,
  },
  buttonSpacing: {
    margin: 3,
  },
});
export default styles;
