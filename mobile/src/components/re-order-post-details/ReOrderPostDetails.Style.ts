import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    backgroundColor: Colors.darkBlueMagentaColor,
    margin: 10,
    borderRadius: 10,
    // alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dragIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
  mediaContent: {
    width: 80,
    height: 80,
  },
  webViewContent: {
    marginTop: 5,
    opacity: 0.99,
  },
  crossIcon: {
    width: 25,
    height: 25,
    position: 'relative',
    top: 10,
    right: 0,
    bottom: 0,
    left: 0,
    marginRight: 10,
  },
  saveText: {
    color: Colors.primaryBlueColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 20,
  },
  discardText: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    marginHorizontal: 10,
  },
  headerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
cancelText: {
  color: Colors.senaryThemeColor,
  fontSize: 15,
  fontFamily: 'Comfortaa-Light',
  lineHeight: 23,
  textAlign: 'center',
  width: 280,
  marginTop: 10
},
playerContainerStyle: {
  backgroundColor: Colors.tertiaryThemeColor,
  height: 100,
  width: '105%',
  position: 'absolute',
  justifyContent: 'space-evenly',
  alignItems: 'center',
},
playerTrackStyle : {
  backgroundColor: Colors.primaryBlueColor,
  height: 1,
}
});
export default styles;
