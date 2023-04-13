import {StyleSheet} from 'react-native';
import Colors from '../../../../resources/Colors';

const styles = (props: any) =>
  StyleSheet.create({
    container: {
      padding: 4,
      margin: 4,
      backgroundColor: !props.Viewed
        ? Colors.quaternaryThemeColor
        : Colors.secondaryThemeColor,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondaryContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: 6,
    },
    thirdContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      flex: 1.2,
      margin:4
    },
    NotifiedON: {
      color: Colors.nonaryThemeColor,
      padding:10
    },
    notifierRegularText: {
      color: Colors.whiteColor,
      fontWeight: '500',
      lineHeight: 22,
    },
    notifierLightText: {
      color: Colors.nonaryThemeColor,
      fontWeight: '400',
      lineHeight: 22,
      
    },
    notifierSubContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    notifierTimeAgo: {
      color: Colors.nonaryThemeColor,
      lineHeight: 30,
    },
    notifiedImage: {
      width: 50,
      height: 50,
      borderRadius:5
    },
    avatarImagePrimary: {
      width: 30,
      height: 30,
      borderRadius: 30,
      backgroundColor: 'blue',
      position: 'relative',
    },
    avatorImageSecondary: {
      width: 30,
      height: 30,
      borderRadius: 30,
      backgroundColor: 'blue',
      position: 'absolute',
      top: 12,
      left: 22,
    },
    avatorSingleImage: {
      width: 45,
      height: 45,
      borderRadius: 50,
      backgroundColor: 'blue',
      position: 'relative',
    },
    textContainer: {
      flex: 6,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    textMessages: {
      maxWidth: '91%',
    },
    semiContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
export default styles;
