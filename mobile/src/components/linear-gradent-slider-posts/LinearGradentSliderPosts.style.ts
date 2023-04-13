import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  feedsContainer: {
    marginTop: 20,
  },
  feedsHeader: {
    justifyContent: 'space-between',
    marginBottom: 10,
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
  },
  followText: {
    color: Colors.primaryBlueColor,
  },
  moreOptionsIcon: {
    marginRight: 12,
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  artistPostImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  projectName: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
  },
  captionContainer: {
    marginTop: '7%',
    marginLeft: 15,
  },
  postCaption: {
    color: Colors.whiteColor,
    marginTop: 5,
  },
  moreText: {
    color: Colors.secondaryGreyColor,
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
    position: 'relative',
  },
  divider: {
    borderColor: Colors.secondaryThemeColor,
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
//   viewPostBtn: {
//     backgroundColor: Colors.tertiaryThemeColor,
//     position: 'absolute',
//     bottom: 10,
//     left: '38%',
//     borderColor: Colors.lightGreyColor,
//     borderRadius: 15,
//     borderWidth: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 5,
//     opacity: 0.5,
//   },
  swiperContentContainerStyle: {
    position: 'relative',
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
    // width:390,
  },
  showPost: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  mediaWidth: {
    width: windowWidth,
  },
  imageFitMode: {
    resizeMode: 'cover',
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
});
export default styles;
