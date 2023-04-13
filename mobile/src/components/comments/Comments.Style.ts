import { StyleSheet } from "react-native";
import Colors from "../../resources/Colors";

export const styles = StyleSheet.create({
    commentsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%'
    },
    commentsHeaderContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 70,
        alignItems: 'flex-end',
        borderBottomColor: Colors.greyBorderColor,
        borderBottomWidth: 0.5
    },
    commentsHeaderText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 17,
        color: '#fff',
        marginRight: 20,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 20,
        zIndex: 999
    },
    commentsHeaderCount: {
        fontFamily: 'Comfortaa-Bold',
        color: Colors.greyTextColor,
        fontSize: 14,
        marginTop: 15,
        marginBottom: 20,
        zIndex: 999
    },
    commentsListContainer: {
        marginTop: 10,
        width: '100%'
    },
    commentsList: {
        flexDirection: 'row'
    },
    commentsListImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginHorizontal: 20,
        marginTop: 10,
    },
    commentsListText: {
        marginBottom: 20,
        marginTop: 10
    },
    commentListName: {
        color: Colors.blueShadeColor,
        fontFamily: 'Comfortaa-Bold',
        fontSize: 17,
        marginBottom: 10
    },
    comment: {
        color: Colors.nonaryThemeColor,
        fontFamily: 'Comfortaa-Light',
        fontSize: 15,
        marginBottom: 10,
        maxWidth: '90%'
    },
    commentDetails: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    commentDuration: {
        fontSize: 15,
        color: Colors.secondaryGreyColor,
        marginRight: 10,
        fontFamily: 'Comfortaa-Light'
    },
    replyText: {
        fontSize: 15,
        color: Colors.secondaryGreyColor,
        marginRight: 10,
        fontFamily: 'Comfortaa-Light'
    },
    repliesText: {
        fontSize: 14,
        color: Colors.secondaryGreyColor,
        marginRight: 10,
        fontFamily: 'Comfortaa-Light'
    },
    postCommentContainer: {
        padding: 20,
        backgroundColor: Colors.quaternaryThemeColor,
        flexDirection: 'column',
        width: '100%',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'flex-end'
    },
    postCommentLabel: {
        padding: 20,
        backgroundColor: Colors.quaternaryThemeColor,
        flexDirection: 'column',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end'
    },
    postCommentInputContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    postCommentInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        borderRadius: 50,
        height: 45,
        backgroundColor: Colors.darkGreyColor
    },
    postCommentImage: {
        height: 30,
        width: 30,
        borderRadius: 50,
        marginStart: 5
    },
    postCommentTextInput: {
        height: 40,
        backgroundColor: Colors.darkGreyColor,
        fontFamily: 'Comfortaa-Light',
        color: Colors.secondaryGreyColor,
        width: '85%',
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    postCommentPostText: {
        color: Colors.secondaryBlueColor,
        fontSize: 16,
        fontFamily: 'Comfortaa-Bold',
        marginLeft: 5,
        marginRight: 5
    },
    replyComment: {
        maxWidth: '85%'
    },
    hideReplies: {
        fontSize: 13,
        color: Colors.nonaryThemeColor,
        marginRight: 10,
        fontFamily: 'Comfortaa-Light',
        marginLeft: 20,
    },
    commentsContentContainerStyle: {
        paddingBottom: '25%'
    },
    repliesContainer: { 
        marginLeft: 40
    }
})