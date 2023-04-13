import {StyleSheet} from 'react-native';
import Colors from '../../../resources/Colors';

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%'
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
  notifierRegularText: {
    color: Colors.whiteColor,
    fontWeight: '500',
    lineHeight: 22,
  },
  notifierLightText: {
    color: Colors.nonaryThemeColor,
    fontWeight: '400',
    fontSize:13,
    lineHeight: 22,
  },
  admirationNumbers:{
    marginHorizontal:10
  },
  notifierEmptyText:{
    color: Colors.nonaryThemeColor,
    fontWeight: '400',
    lineHeight: 22,
    margin:10,
    alignSelf:'center'
  },
  shareContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    alignItems:'center'
  },
  commentsListImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  commentListName: {
    color: Colors.secondaryGreyColor,
    fontFamily: 'Comfortaa-Light',
    alignSelf: 'center',
    width: '90%',
    paddingHorizontal: 10,
  },


  postCommentInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 50,
    height: 45,
    backgroundColor: Colors.tertiaryThemeColor,
},
postCommentImage: {
    height: 20,
    width: 20,
    marginLeft: 15
},
postCommentTextInput: {
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
