import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  header: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // left: 0,
    // right: 0,
    // paddingTop: 10,
    backgroundColor: Colors.primaryThemeColor,
    flexDirection: 'column',
    height: 300,
    flex: 1,
    width: windowWidth,
  },

  cardImagesLinearGradent: {
    height: 180,
    width: '100%',
    margin: 4,
    borderRadius: 10,
    borderWidth: 4,
  },
  imageBackgroundStyle: {
    // borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  imageLinearGradentBlurEffect: {
    height: 180,
    width: '100%',
    position: 'relative',
  },
  avatorImageSecondary: {
    width: 100,
    height: 100,
    position: 'relative',
    resizeMode: 'cover',
  },
  skillsChip: {
    color: Colors.quinarycementColor,
    margin: 3,
    paddingHorizontal: 10,
    backgroundColor: Colors.quinaryDarkCementColor,
    padding: 3,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bluredText: {
    color: '#fff0',
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  profileAvator: {position: 'absolute', bottom: -6, width: '100%'},
  profileAvatorSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  profileViewName: {marginHorizontal: 2, margin: 4, flexDirection: 'column'},
  profileName: {
    color: Colors.secondaryWhiteColor,
    fontSize: 18,
    fontFamily: 'Comfortaa-Bold',
    margin: 6,
  },
  skillsContainer: {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'},

  // flash message
  flashMessageDarkGreyRegular: {
    color: Colors.secondaryGreyColor,
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 24,
    // maxWidth: '80%',
    fontSize: 17,
  },
  flashMessageHighLighted: {
    color: Colors.whiteColor,
    fontFamily: 'Comfortaa-Bold',
    backgroundColor: Colors.darkBlueMagentaColor,
    textAlign: 'center',
    lineHeight: 24,
    // maxWidth: '80%',
    paddingHorizontal: 4,
    fontSize: 17,
  },
});
export default styles;
