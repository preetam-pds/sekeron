import {StyleSheet} from 'react-native';
import Colors from '../../../../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: 200, paddingLeft: 10
    },
    subContainer:{width: 220, height: 190, aspectRatio: 1},
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 2,
    opacity: 0.5,
  },
  textColor: {color: Colors.whiteColor, fontFamily:'Comfortaa-Bold'},
  statusOngoingColor: {
    color: Colors.reddishPinkColor,
  },
  statusCompletedColor: {
    color: Colors.monoChromaticGreenColor,
  },
  textSize: {
    fontSize: 12,
    margin: 2,
    alignItems: 'center',
    textAlign: 'center',
  },
  headerTextSize: {fontSize: 16},
  seeAllText: {color: Colors.primaryVioletColor},
  contentContainerStyle: {
    position: 'relative',
    marginTop: 20,
  },
  profileProjectCardsContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
  alignmentContainer: {
    flexDirection: 'row',
  },
  paginationStyle: {position: 'relative', bottom: -10},
  paginationDotStyle: {
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  inactivePaginationStyle: {
    width: 6,
    backgroundColor: Colors.greyOutlineVariantColor,
  },
  activePaginationStyle: {
    width: 10,
    backgroundColor: Colors.whiteColor,
  },
  projectImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  eventTypeContainer: {
    height: 24,
    position: 'absolute',
    backgroundColor: 'black',
    top: '5%',
    left: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  eventType: {
    color: Colors.monoChromaticGreenColor,
    textAlign: 'center',
    position: 'absolute',
    top: 3,
  },
  registerNowContainer: {
    height: 30,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    opacity: 0.4,
    backgroundColor: 'black',
    width: '100%',
  },
  registerNowText: {color: Colors.whiteColor},
  eventNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  eventName: {
    fontSize: 13,
  },
  eventDate: {
    color: Colors.nonaryThemeColor,
    // marginLeft: 10,
  },
  avatharContainer: {
    marginHorizontal: 12,
  },
  profileProjectCardsName: {
    fontSize: 12,
    marginTop: 10,
    // marginLeft: 15,
  },
  profileProjectCardsSecondaryContainer: {
    flexDirection: 'row',
    marginTop: 15,
    // marginLeft: 13,
  },
  profileImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  profileName: {
    color: Colors.nonaryThemeColor,
    // marginLeft: 5,
  },
  followText: {
    color: Colors.primaryBlueColor,
    // marginLeft: 5,
  },
  divider: {marginTop: 15},
  projectOuterImage:{height: 17, width: 17, margin: 2},
  projectImageInner:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  profileSingleAvator:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default styles;
