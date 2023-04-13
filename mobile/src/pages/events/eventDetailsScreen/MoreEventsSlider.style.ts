import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  contentContainer: {alignItems: 'center'},
  textColor: {color: Colors.whiteColor},
  textSize: {fontSize: 10},
  headerTextSize: {fontSize: 16},
  seeAllText: {color: Colors.primaryVioletColor},
  contentContainerStyle: {
    position: 'relative',
    marginTop: 20,
  },
  trendingProjectsContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
  alignmentContainer: {
    flexDirection: 'row',
  },
  paginationStyle: {position: 'absolute', bottom: -20},
  paginationDotStyle: {
    backgroundColor: Colors.whiteColor,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  inactivePaginationStyle: {width: 6},
  activePaginationStyle: {
    width: 10,
  },
  projectImage: {
    width: 190,
    height: 220,
    resizeMode: 'cover',
    marginHorizontal: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  eventTypeContainer: {
    width: 70,
    height: 24,
    backgroundColor: Colors.darkBlueMagentaColor,
    position: 'absolute',
    top: 10,
    left: 7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  eventType: {
    textAlign: 'center',
    fontFamily:'Comfortaa-Bold',
    fontSize:12
  },
  registerNowContainer: {
    height: 30,
    position: 'absolute',
    marginLeft: 8,
    justifyContent: 'center',
    bottom: 0,
    opacity:0.4,
    backgroundColor:Colors.primaryThemeColor,
    width:'100%'
  },
  registerNowText: {color: Colors.whiteColor},
  eventNameContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 8,
    backgroundColor:Colors.secondaryThemeColor,
    width: 190,

  },
  eventName: {
    fontSize: 12,
    fontFamily:'Comfortaa-Bold'

  },
  eventDate: {
    color: Colors.nonaryThemeColor,
    // marginLeft: 10,
  },
  avatharContainer: {
    // marginLeft: '5%',
    // marginTop: 10,
    alignSelf:'center',
    textAlign:'center'
  },
  trendingProjectsName: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 15,
  },
  trendingProjectsSecondaryContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 13,
  },
  profileImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  profileName: {
    color: Colors.nonaryThemeColor,
    marginLeft: 5,
  },
  followText: {
    color: Colors.primaryBlueColor,
    marginLeft: 5,
  },
  divider: {marginTop: 15},
});

export default styles;
