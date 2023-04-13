import {strings} from '@sekeron/domain';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MediaAssets from '../../assets';
import BottomSheet from '../../common-components/bottom-sheet/BottomSheet';
import {commentsData} from '../../json/commentsJson';
import Colors from '../../resources/Colors';
import {styles} from './Comments.Style';

 const Comments = (props:any) => {
  const [comments, setComments] = useState(commentsData);

  const toggleReplies = (id, showReplies) => {
    const newComments = {
      ...comments,
      comments: comments.comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            isRepliesVisible: showReplies,
          };
        } else {
          return comment;
        }
      }),
    };
    setComments(newComments);
  };

  const RenderReplies = ({item}) => {
    return (
      <View style={styles.repliesContainer}>
        <View style={styles.commentsListContainer}>
          {item.replyComments &&
            item.replyComments.map(reply => {
              return (
                <View key={reply.id} style={styles.commentsList}>
                  <Image
                    style={styles.commentsListImage}
                    source={reply.profilePic}
                  />

                  <View style={styles.commentsListText}>
                    <Text style={styles.commentListName}>{reply.name}</Text>
                    <Text style={[styles.comment, styles.replyComment]}>
                      {reply.comment}
                    </Text>
                    <View style={styles.commentDetails}>
                      <Text style={styles.commentDuration}>
                        {reply.commentDuration}
                      </Text>
                      <TouchableOpacity>
                        <Text style={styles.replyText}>{strings.reply}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          <TouchableOpacity onPress={() => toggleReplies(item.id, false)}>
            <Text style={styles.hideReplies}>{strings.hideReplies}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const RenderCommentsList = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View>
          <View style={styles.commentsListContainer}>
            <View style={styles.commentsList}>
              <Image
                style={styles.commentsListImage}
                source={item.profilePic}
              />
              
              <View style={styles.commentsListText}>
                <Text style={styles.commentListName}>{item.name}</Text>
                <Text style={styles.comment}>{item.comment}</Text>
                <View style={styles.commentDetails}>
                  <Text style={styles.commentDuration}>
                    {item.commentDuration}
                  </Text>

                  <TouchableOpacity>
                    <Text style={styles.replyText}>{strings.reply}</Text>
                  </TouchableOpacity>

                  {item.replyCount > 0 ? (
                    <TouchableOpacity onPress={() => toggleReplies(item.id, true)}>
                      <Text style={styles.repliesText}>
                        {item.replyCount} {strings.replies}
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
          {item.isRepliesVisible ? <RenderReplies item={item} /> : null}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const RenderComments = () => {
    return (
      <View style={styles.commentsContainer}>
        <View style={styles.commentsHeaderContainer}>
          <Text style={styles.commentsHeaderText}>{strings.comments}</Text>
          <Text style={styles.commentsHeaderCount}>{comments.count}</Text>
        </View>
        <FlatList
          data={comments.comments}
          contentContainerStyle={styles.commentsContentContainerStyle}
          keyExtractor={(item): any => item.id}
          renderItem={RenderCommentsList}
        />
        <View style={styles.postCommentContainer}>
          <Text style={styles.postCommentLabel}>{strings.addAComment}</Text>
          <View style={styles.postCommentInputContainer}>
            <View style={styles.postCommentInputBox}>
              <Image
                style={styles.postCommentImage}
                source={MediaAssets.profile_pic}
              />
              <TextInput
                style={styles.postCommentTextInput}
                placeholderTextColor={Colors.secondaryGreyColor}
                placeholder={strings.addAComment}
                autoFocus={props.autoFocus}
              />
            </View>
            <TouchableOpacity disabled>
              <Text style={styles.postCommentPostText}>{strings.post}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <BottomSheet
      renderItem={RenderComments}
      setModalVisible={props.setShowComments}
      isModalVisible={props.showComments}
      toggleModal={props.toggleShowComments}
    />
  );
}

export default Comments