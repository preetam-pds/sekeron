import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImagePrimary: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: 'blue',
    position: 'relative',
    margin: 10,
  },
  textContainer: {
    margin: 10,
  },
  profileNameRegular: {
    color: Colors.whiteColor,
    fontWeight: '500',
    lineHeight: 22,
  },
  profileNameLightText: {
    color: Colors.nonaryThemeColor,
    fontWeight: '400',
    lineHeight: 22,
  },
  emptyProfileName: {
    color: Colors.nonaryThemeColor,
    fontWeight: '400',
    lineHeight: 22,
    margin: 10,
    alignSelf: 'center',
  },
  shareContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
  },
  SharePostImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  SharePostMessage: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 10,
  },

  SharePostSearchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 50,
    height: 45,
    backgroundColor: Colors.tertiaryThemeColor,
  },
  SharePostSearchImage: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  SharePostTextInput: {
    height: 40,
    backgroundColor: Colors.tertiaryThemeColor,
    fontFamily: 'Comfortaa-Light',
    color: Colors.secondaryGreyColor,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
export default styles;
