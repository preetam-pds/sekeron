import {Image, TouchableOpacity, View} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import postStyles from '../Posts.Style';
import MediaAssets from '../../../../assets';
import {strings} from '@sekeron/domain';
import CustomText from '../../../../common-components/custom-text/CustomText';
import Comments from '../../../../components/comments/Comments';
import Tooltip from 'react-native-walkthrough-tooltip';
import Colors from '../../../../resources/Colors';

const PostActions = (props: any) => {
  const {
    toggleSharePostSheet,
    toggleFollowAdmirations,
    item,
    handleAdmire,
    handleSave,
    noSaveIcon,
  } = props;

  const [showComments, setShowComments] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  const [timeLeft, setTimeLeft] = useState<any>(null);

  const [autoFocus, setAutoFocus] = useState(false);
  const handleSetShowComments = (value: any) => {
    setShowComments(value);
  };
  const toggleShowComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
      setOpenSave(false);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      return setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <Fragment>
      <View
        style={[
          postStyles.postsBottomContainer,
          postStyles.alignmentContainer,
          postStyles.postActionsContainer,
        ]}>
        <View style={[postStyles.alignmentContainer]}>
          <TouchableOpacity
            style={postStyles.alignmentContainer}
            onPress={() => handleAdmire(item.id)}>
            {props?.item?.isLiked ? (
              <Image
                source={MediaAssets.ic_admirations_active}
                style={postStyles.Icon}
              />
            ) : (
              <Image
                source={MediaAssets.ic_admirations_inactive}
                style={postStyles.Icon}
              />
            )}
            <CustomText
              style={
                (postStyles.textStyle, postStyles.admirationAndCommentTextColor)
              }>
              {strings.admire}
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowComments(true);
              setAutoFocus(true);
            }}
            style={[postStyles.alignmentContainer, postStyles.commentButton]}>
            <Image source={MediaAssets.ic_comments} style={postStyles.Icon} />
            <CustomText
              style={
                (postStyles.textStyle, postStyles.admirationAndCommentTextColor)
              }>
              {strings.comment}
            </CustomText>
          </TouchableOpacity>
        </View>

        <View
          style={[
            postStyles.alignmentContainer,
            postStyles.saveAndShareBtnContainer,
          ]}>
          {noSaveIcon ? null : <Tooltip
            isVisible={props?.item?.isSaved && openSave}
            contentStyle={postStyles.toolTipBackground}
            childContentSpacing={4}
            arrowStyle={{marginLeft: -14}}
            backgroundColor={Colors.transparentColor}
            content={
              <View>
                <CustomText style={postStyles.toolTipText}>
                  {strings.addedToFavourite}
                </CustomText>
              </View>
            }
            onClose={() => setOpenSave(false)}
            placement="top">
            <TouchableOpacity
              onPress={() => {
                handleSave(item.id);
                setOpenSave(true);
                setTimeLeft(2);
              }}
              style={[
                postStyles.alignmentContainer,
                postStyles.saveAndShareBtnContainer,
              ]}>
              {props?.item?.isSaved ? (
                <Image
                  source={MediaAssets.ic_save_active}
                  style={[postStyles.Icon, postStyles.saveIcon]}
                />
              ) : (
                <Image
                  source={MediaAssets.ic_save}
                  style={[postStyles.Icon, postStyles.saveIcon]}
                />
              )}
            </TouchableOpacity>
          </Tooltip>}

          <TouchableOpacity
            onPress={toggleSharePostSheet}
            style={[
              postStyles.alignmentContainer,
              postStyles.saveAndShareBtnContainer,
            ]}>
            <Image source={MediaAssets.ic_share} style={postStyles.Icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[{marginTop:8},postStyles.divider]}></View>

      <View
        style={[
          postStyles.alignmentContainer,
          postStyles.postCommentsContainer,
          postStyles.postActionsContainer,
        ]}>
        <TouchableOpacity onPress={toggleFollowAdmirations}>
          <CustomText
            style={
              (postStyles.textStyle,
              postStyles.viewAdmirationsAndCommentTextColor)
            }>
            {props?.item?.admirations}
          </CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowComments(true);
            setAutoFocus(false);
          }}>
          <CustomText
            style={
              (postStyles.textStyle,
              postStyles.viewAdmirationsAndCommentTextColor)
            }>
            {props?.item?.comments}
          </CustomText>
        </TouchableOpacity>
      </View>
      {showComments ? (
        <Comments
          setShowComments={handleSetShowComments}
          showComments={showComments}
          toggleShowComments={toggleShowComments}
          autoFocus={autoFocus}
        />
      ) : null}
    </Fragment>
  );
};
export default PostActions;
