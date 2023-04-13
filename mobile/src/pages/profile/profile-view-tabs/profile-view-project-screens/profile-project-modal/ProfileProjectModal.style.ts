import {StyleSheet} from 'react-native';
import Colors from '../../../../../resources/Colors';

const styles = StyleSheet.create({
  
  headerText: {
    color: Colors.whiteColor,
    padding: 10,
    fontSize: 16,
    alignSelf: 'flex-start',
    fontFamily: 'Comfortaa-Bold',
  },
  subContainer:{width: 170, height: 190},
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
  modalView: {
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: '85%',
    marginVertical:'10%',
    justifyContent:'center',
    alignContent:'center'
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
    padding: 4
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
  profileProjectSubContainer: {
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
    padding:7
  },
  imageStyles:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  profileProjectImage:{height: 17, width: 17, margin: 2},
  profileProjectContainer:{
    alignItems: 'flex-start',
    backgroundColor: Colors.primaryThemeColor,
    width: 170,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileProjectSecondContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileDetailsImage:{height: 20, width: 20},
  profileDetailsInnerImage:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  modalContainer:{backgroundColor: Colors.primaryThemeColor, opacity: 0.2}
});
export default styles;
