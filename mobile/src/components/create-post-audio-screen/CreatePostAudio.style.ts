import {StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

export const styles = StyleSheet.create({
    audioContainer:{
    },
  shareContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 4,
    padding:15,
    borderRadius:4,
    alignItems: 'center',
    backgroundColor:Colors.primaryThemeColor
  },
  SharePostImage: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  SharePostMessage: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 10,
  },
  addBorder: {
    borderColor: Colors.monoChromaticGreenColor, 
    borderWidth: 3
  },
});
