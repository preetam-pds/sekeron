import {StyleSheet} from 'react-native';
import Colors from '../../../../resources/Colors';

export const styles = StyleSheet.create({
  headerText: {
    color: Colors.whiteColor,
    padding: 10,
    fontSize: 16,
    alignSelf: 'flex-start',
    fontFamily: 'Comfortaa-Bold',
  },
  flatListContainer: {
    padding: 20,
    borderRadius: 24,
  },
  flatListcolumnWrapperStyle: {
    justifyContent: 'space-around',
  },
  centeredView: {
    // justifyContent: 'center',
    // marginVertical: 10,
  },
  innerImageWidth: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  favouriteSubConatiner: {height: 17, width: 17, margin: 2},
  modalView: {
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardImagesLinearGradent: {
    height: 160,
    width: '100%',
    margin: 4,
    borderRadius: 10,
    borderWidth: 4,
  },
  cardImagesLinearGradentSelected: {
    height: 160,
    width: '100%',
    margin: 4,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: Colors.primaryBlueColor,
    overflow: 'hidden',
  },
  imageBackgroundStyle: {
    borderRadius: 5,
    height: 156,
  },
  imageLinearGradentBlurEffect: {
    height: 160,
    width: '100%',
    position: 'relative',
  },
  container: {
    alignItems: 'flex-start',
    padding: 4,
    marginVertical: 8,
  },
  projectImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  favouriteTypeContainer: {
    height: 24,
    position: 'absolute',
    backgroundColor: 'black',
    top: '5%',
    left: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 2,
    opacity: 0.5,
  },
  textColor: {color: Colors.whiteColor, fontFamily: 'Comfortaa-Bold'},
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
  profileName: {
    color: Colors.nonaryThemeColor,
    // marginLeft: 5,
  },
  followText: {
    color: Colors.primaryBlueColor,
    // marginLeft: 5,
  },
  favouriteNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  favouriteName: {
    fontSize: 13,
  },
  avatharContainer: {
    marginHorizontal: 12,
    padding: 7,
  },
  favouriteIcon: {position: 'absolute', bottom: 5, right: -20},
  Icon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginRight: 4,
  },
  saveIcon: {
    marginRight: 30,
  },
  projectViewContainer: {
    alignItems: 'flex-start',
    backgroundColor: Colors.primaryThemeColor,
    width: 170,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageInnerWidth: {height: 20, width: 20},
  imageCoverStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
