import { PlatformEnum } from '@sekeron/domain';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: Colors.primaryCementColor,
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    // marginTop: 3,
  },
  activeDotStyle: {
    backgroundColor: Colors.whiteColor,
    width: 13,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    // marginTop: 3,
  },

  feedsContainer: {
    marginTop: 20,
    height: 100,
  },
  feedsHeader: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  profileImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  textFontSize: {
    fontSize: 15,
    marginLeft: 10,
  },
  profileName: {
    color: Colors.blueShadeColor,
  },
  profileImageContainer: {
    marginHorizontal: 20,
    // width:'100%',
  },
  followText: {
    color: Colors.primaryBlueColor,
  },
  moreOptionsIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  hostedBy: {
    color: Colors.primaryBlueColor,
    fontFamily: 'Comfortaa-Light',
    fontSize:12,
  },
  captionContainer: {
    // marginTop: '7%',
    // marginLeft: 15,
  },
  postCaption: {
    color: Colors.whiteColor,
    marginTop: 5,
  },
  hostDays: {
    color: Colors.secondaryGreyColor,
    marginHorizontal:6,
    fontSize:12
  },
  alignmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postsBottomContainer: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
  postActionsContainer: {
    marginHorizontal: 15,
  },
  Icon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginRight: 4,
  },
  textStyle: {
    marginLeft: 3,
  },
  viewAdmirationsAndCommentTextColor: {color: Colors.whiteColor},
  admirationAndCommentTextColor: {
    color: Colors.nonaryThemeColor,
  },
  commentButton: {
    marginLeft: 15,
  },
  saveAndShareBtnContainer: {},
  saveIcon: {
    marginRight: 30,
  },
  postImageContainer: {
    flex: 1,
    // position: 'relative',
    height: 250, 
    width:windowWidth,
    backgroundColor: Colors.primaryThemeColor,
    marginTop:10,
  },
  divider: {
    borderColor: Colors.blackColorShade,
    borderWidth: 0.3,
  },
  sliderDivider: {
    marginBottom: 20,
  },
  post: {
    paddingBottom: 10,
  },
  videoControlsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    left: '9%',
  },
  postDivider: {
    marginTop: 20,
  },
  videoControlIcons: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  sliderStyle: {
    width: '70%',
    height: 40,
    flexDirection: 'row',
  },
  videoDuration: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Light',
  },
  postCommentsContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewPostBtn: {
    backgroundColor: Colors.tertiaryThemeColor,
    position: 'absolute',
    bottom: 10,
    left: '38%',
    borderColor: Colors.lightGreyColor,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    opacity: 0.5,
  },
  viewPostText: {color: Colors.whiteColor, fontSize: 12},
  swiperContentContainerStyle: {
    position: 'relative',
    // marginLeft:-20
  },
  paginationStyle: {position: 'absolute', bottom: 12},
  buttonWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    width: windowWidth,
    height: 270,
    resizeMode: 'cover',
  },
  secondaryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    width:40,
    borderRadius: 25,
    // paddingHorizontal: 20,
    marginTop: Platform.OS === PlatformEnum.ios ? 15 : 5,
    opacity: 0.7,
  },

  artistOfTheWeekContainer: {
    position: 'absolute',
    top:0,
    right: 30,
  },
  interestBar: {marginTop: 15},
  postOpacity: {
    opacity: 1,
  },
  postOpacityOnSlide: {
    opacity: 0.5,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  showPost: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayContainer: {
    flex: 1,
  },
  overlayBackgroundColor: {
    backgroundColor: Colors.primaryThemeColor,
  },
  overlayDirection: {
    flexDirection: 'row',
  },
  volumeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  showPostText: {
    color: Colors.whiteColor,
    fontSize: 22,
    position: 'absolute',
    fontFamily: 'Comfortaa-Bold',
  },
  toolTipText: {
    color: Colors.primaryBlueColor,
  },
  toolTipBackground: {
    backgroundColor: Colors.senaryGreyColor,
  },
  fouthContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photoWalkContainer: {
    backgroundColor: Colors.whiteColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    width: '35%',
    marginVertical: 4,
  },
  eventPhotoWalkText: {
    color: Colors.primaryThemeColor,
    padding: 2,
    textAlign: 'center',
    alignItem: 'center',
    fontSize: 12,
    fontFamily: 'Comfortaa-Bold',
    margin: 1,
    paddingHorizontal:4
  },
  semiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-between',
  },
  imageStyles: {width: '100%', height: '100%'},
  semiSubContainer: {width: 15, height: 15, marginHorizontal: 4},
  imageContainer: {width: 15, height: 15, marginHorizontal: 4},
  notifierTimeAgo: {
    color: Colors.nonaryThemeColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 12,
  },
});
