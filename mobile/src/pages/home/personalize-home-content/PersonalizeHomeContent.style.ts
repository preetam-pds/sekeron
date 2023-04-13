import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: '48%',
    marginBottom: 10,
    borderRadius: 20,
  },
  cardImages: {
    height: 160,
    width: '100%',
    margin: 4,
    borderRadius: 10,
    elevation: 5,
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardImagesSelected: {
    height: 160,
    width: '100%',
    margin: 4,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: Colors.primaryBlueColor,
    elevation: 5,
  },
  selectIcon: {
    position: 'absolute',
  },
  enableSelectIcon: {
    height: 40,
    width: 40,
  },
  disableSelectIcon: {
    height: 40,
    width: 40,
    tintColor: 'black',
  },
  checkbox: {
    position: 'absolute',
    height: 23,
    width: 33,
    top: 0,
    left: 0,
  },
  titleText: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
  },
  containerStyle: {
    backgroundColor: 'black',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  headerText: {
    color: Colors.nonaryThemeColor,
    padding: 10,
    fontSize: 22,
    alignSelf: 'center',
  },
  scrollUpIcon: {
    width: 35,
    height: 35,
    transform: [{rotateX: '180deg'}],
  },
  scrollDownIcon: {
    width: 35,
    height: 35,
  },
  buttonContainer: {
    bottom: 50,
  },
  scrollIconContainer: {
    bottom: 100,
  },
  texts: {
    color: Colors.whiteColor,
  },
  modalBackground: {
    backgroundColor: Colors.primaryThemeColor,
    overflow: 'hidden',
  },
  overlayContainer: {
    backgroundColor: Colors.transparentColor,
    overflow: 'hidden',
    width: '100%',
    opacity: 5,
  },
  flatListContainer: {
    padding: 20,
    borderRadius: 24,
  },
  flatListcolumnWrapperStyle: {
    justifyContent: 'space-around',
  },
  centeredView: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  modalView: {
    marginBottom: 20,
    backgroundColor: Colors.secondaryThemeColor,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: Colors.primaryThemeColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: '95%',
    marginHorizontal: '2%',
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
    overflow:'hidden',
  },
  imageBackgroundStyle:{
    borderRadius: 5, height: 156
  },
  imageLinearGradentBlurEffect:{
    height: 160,
    width: '100%',
    position: 'relative',
  }
});
export default styles;
