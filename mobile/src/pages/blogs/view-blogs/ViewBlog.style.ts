import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

export const styles = StyleSheet.create({
  headerContainer: {marginBottom: 10},
  container: {height: 300},
  secondaryContainer: {position: 'relative'},
  blogMainImage: {width: '100%', height: 250},
  forthContainer: {
    position: 'absolute',
    flex: 1,
    top: 25,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogName: {
    color: Colors.tertiaryThemeColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 22,
  },
  blogMoreImage: {height: 30, width: 30, resizeMode: 'contain'},
  blogMoreContainer: {
    position: 'absolute',
    flex: 1,
    top: 110,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogMoreSecondContainer: {
    height: 140,
    width: '80%',
    backgroundColor: Colors.tertiaryThemeColor,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  blogLabelText: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Light',
    fontSize: 12,
    marginVertical: 8,
  },
  blogLabelHeightAndAlign: {
    lineHeight: 18,
    textAlign: 'justify',
  },
  ViewAlignContainer: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  blogSubHeadingText: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 22,
  },
  subHeader: {
    color: Colors.whiteColor,
    fontSize: 16,
    alignSelf: 'flex-start',
    fontFamily: 'Comfortaa-Bold',
  },
  blogAboutImage: {
    width: '100%',
    height: 210,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBetweenImage: {height: 220, width: '80%', alignSelf: 'center'},
  blogSubHeadingContainer: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
