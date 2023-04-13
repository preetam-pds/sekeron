import {Dimensions,  StyleSheet} from 'react-native';
import Colors from '../../resources/Colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  blogsInputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 45,
    backgroundColor: Colors.tertiaryThemeColor,
  },
  blogsSerachIcon: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  blogsSerachTextInput: {
    height: 40,
    backgroundColor: Colors.tertiaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    color: Colors.secondaryGreyColor,
    width: '100%',
    // paddingHorizontal: 10,
  },
  postImageContainer: {
    marginVertical:15,
    height: 250,
    width: windowWidth,
    backgroundColor: Colors.primaryThemeColor,
  },
  swiperContentContainerStyle: {
    position: 'relative',
    // marginLeft:-20
  },
  paginationStyle: {position: 'absolute', bottom: -12},
  buttonWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  backgroundImage: {
    width: windowWidth,
    height: 270,
    resizeMode: 'cover',
    opacity:1
  },
  contentContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  secondaryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
    opacity: 0.1,
  },

  artistOfTheWeekContainer: {
    position: 'absolute',
    top: 190,
    // right: 30,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    width: 40,
    borderRadius: 20,
    opacity: 0.5,
  },
  footerContentBlur:{
    position: 'absolute',
    top: 190,
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    width: windowWidth,
  },
  footerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    top: 190,
    width: '100%',
  },
  footerTextContainer:{flex: 1, top: 20, marginHorizontal: 10},
  footerTextSubContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerTextStyle:{
    color: Colors.primaryThemeColor,
    fontSize: 16,
    alignItems: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  readMoreTextContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  readMoreText:{
    color: Colors.primaryThemeColor,
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
  },
  rightArrowIcon:{
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginHorizontal: 4,
  }
});
export default styles;
