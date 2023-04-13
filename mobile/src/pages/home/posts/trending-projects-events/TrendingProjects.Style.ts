import {StyleSheet} from 'react-native';
import Colors from '../../../../resources/Colors';

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
  paginationStyle: {position: 'absolute', bottom: -25},
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
    top: '5%',
    left: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  eventType: {
    color: Colors.flamingoOrangeColor,
    textAlign: 'center',
    position: 'absolute',
    top:3
  },
  registerNowContainer: {
    height: 30,
    position: 'absolute',
    marginLeft: 8,
    justifyContent: 'center',
    bottom: 0,
    opacity:0.4,
    backgroundColor:'black',
    width:'100%'
  },
  registerNowText: {color: Colors.whiteColor},
  eventNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 15,
  },
  eventName: {
    fontSize: 12,
  },
  eventDate: {
    color: Colors.nonaryThemeColor,
    marginLeft: 10,
  },
  avatharContainer: {
    marginLeft: '12%',
    marginTop: 10,
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
