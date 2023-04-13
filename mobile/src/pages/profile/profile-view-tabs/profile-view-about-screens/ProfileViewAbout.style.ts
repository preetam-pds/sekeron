import {StyleSheet} from 'react-native';
import Colors from '../../../../resources/Colors';

export const styles = StyleSheet.create({
  aboutHeaders: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    marginVertical:10
  },
  destination: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
  },
  otherDetails:{
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    margin:4
  },
  letterSpacing:{
    lineHeight:30
  },
  destinationBold: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
  },
  aboutSubHeading: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
  },
  websiteLinkHeader: {
    color: Colors.primaryBlueColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  skillsChip: {
    color: Colors.secondaryGreyColor,
    margin: 3,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.quaternaryThemeColor,
    borderColor: Colors.secondaryGreyColor,
    padding: 3,
    borderRadius: 8,
    overflow: 'hidden',
  },
  informationDetailsContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  informationDetailsSubContainer:{
    width: 20,
    height: 20,
    marginHorizontal: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  imageStyles:{width: '100%', height: '100%'},
  skillsChipContainer:{flex:1,display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginVertical:10}
});
