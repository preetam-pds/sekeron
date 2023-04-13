import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {strings} from '@sekeron/domain';
import {styles} from './ProfileViewPostScreens.style';
import CustomText from '../../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../../assets';
import FeedsMediaItem from '../../../home/posts/feeds-media-item/FeedsMediaItem';
import SharePostList from '../../../home/share-post-bottom-sheet/SharePostBottomSheet';
import AdmirationsList from '../../../home/admirations-bottom-sheet/AdmirationsBottomSheet';
import PostActions from '../../../home/posts/post-actions/PostActions';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 60;
const sliderWidth = width / 2;

const PostProfile = ({item, attachments, postItem}) => {
  const [postProfileData, setPostProfileData] = useState<any>(item);
  const [sharePost, setSharePost] = useState(false);
  const [postMenuId, setPostMenuId] = useState(null);
  const [postId, setPostId] = useState<any>(null);
  const [postCaptionId, setPostCaptionId] = useState(null);
  const [followAdmirations, setFollowAdmirations] = useState(false);

  const toggleSharePostSheet = () => {
    setSharePost(!sharePost);
  };

  const toggleFollowAdmirations = () => {
    setFollowAdmirations(!followAdmirations);
  };

  const handleAdmire = (number: any) => {
    if (item.id === number) {
      setPostProfileData({
        ...postProfileData,
        isLiked: !postProfileData.isLiked,
      });
    } else {
      setPostProfileData({...postProfileData});
    }
  };

  return (
    <View style={{flex: 1}}>
      <View key={postProfileData.id} style={styles.post}>
        <View style={[styles.sliderDivider, styles.divider]} />
        <View
          style={
            postProfileData?.id == postId
              ? styles.postOpacityOnSlide
              : styles.postOpacity
          }>
          <View style={[styles.feedsHeader, styles.alignmentContainer]}>
            <View
              style={[styles.profileImageContainer, styles.alignmentContainer]}>
              <Image
                source={{
                  uri: postProfileData.profileImage,
                }}
                style={styles.profileImage}
              />
              <TouchableOpacity>
                <CustomText style={[styles.profileName, styles.textFontSize]}>
                  {postProfileData?.profileName?.length >= 15
                    ? postProfileData?.profileName.slice(0, 15) + '...'
                    : postProfileData?.profileName}
                </CustomText>
              </TouchableOpacity>
              {/* {postProfileData.isFollowed ? (
          <TouchableOpacity>
            <CustomText
              style={[
                styles.followText,
                styles.textFontSize,
              ]}>
              {strings.follow}
            </CustomText>
          </TouchableOpacity>
        ) : null} */}
            </View>

            <TouchableOpacity
              onPress={() => {
                setPostMenuId(postProfileData.id);
              }}>
              <Image
                source={MediaAssets.ic_more_options}
                style={styles.moreOptionsIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.postImageContainer, styles.contentContainer]}>
            <SwiperFlatList
              nestedScrollEnabled={true}
              showPagination={
                postProfileData?.attachments.length > 1 ? true : false
              }
              contentContainerStyle={[
                styles.swiperContentContainerStyle,
                styles.contentContainer,
              ]}
              paginationStyle={styles.pagnationStyle}
              paginationStyleItemInactive={styles.dotStyle}
              paginationStyleItemActive={styles.activeDotStyle}
              data={attachments}
              renderItem={({item}) => {
                return (
                  <FeedsMediaItem
                    item={item}
                    attchments={attachments}
                    windowWidth={windowWidth}
                    sliderWidth={sliderWidth}
                    sliderPosition={0}
                    postId={postId}
                    postItem={postItem}
                  />
                );
              }}
            />
          </View>

          <View style={styles.captionContainer}>
            <CustomText style={styles.projectName}>
              {postProfileData.projectName}
            </CustomText>
            <CustomText style={styles.postCaption}>
              {postProfileData.id === postCaptionId
                ? postProfileData.caption
                : postProfileData.caption.substr(0, 50)}
              {postProfileData.id !== postCaptionId ? (
                <CustomText
                  style={styles.moreText}
                  onPress={() => {
                    setPostCaptionId(postProfileData.id);
                  }}>
                  {strings.more}
                </CustomText>
              ) : (
                <CustomText
                  style={styles.moreText}
                  onPress={() => {
                    setPostCaptionId(null);
                  }}>
                  {strings.less}
                </CustomText>
              )}
            </CustomText>
          </View>
          <View style={[styles.sliderDivider, styles.divider]} />

          <PostActions
            item={postProfileData}
            handleAdmire={handleAdmire}
            noSaveIcon={true}
            toggleSharePostSheet={toggleSharePostSheet}
            toggleFollowAdmirations={toggleFollowAdmirations}
          />
        </View>

        <SharePostList
          sharePost={sharePost}
          setSharePost={setSharePost}
          toggleSharePostSheet={toggleSharePostSheet}
        />

        <AdmirationsList
          followAdmirations={followAdmirations}
          setFollowAdmirations={setFollowAdmirations}
          toggleFollowAdmirations={toggleFollowAdmirations}
        />
      </View>
    </View>
  );
};

export default PostProfile;
