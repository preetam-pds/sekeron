import {strings} from '@sekeron/domain';
import React, {Fragment, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import MediaAssets from '../../../../assets';
import CustomText from '../../../../common-components/custom-text/CustomText';
import MenuOptions from '../../../../common-components/menu/Menu';
import {post} from '../../../../json/postJson';
import AdmirationsList from '../../../home/admirations-bottom-sheet/AdmirationsBottomSheet';
import FeedsMediaItem from '../../../home/posts/feeds-media-item/FeedsMediaItem';
import PostActions from '../../../home/posts/post-actions/PostActions';
import SharePostList from '../../../home/share-post-bottom-sheet/SharePostBottomSheet';
import {styles} from './MyfavouritesPost.styles';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 60;
const sliderWidth = width / 2;

export const MyFavouritesPost = () => {
  const [allPost, setAllPost] = useState<any>(post);
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

  const handleAdmire = (name: any) => {
    const data = allPost?.map(item => {
      if (item.id === name) {
        return {
          ...item,
          isLiked: !item.isLiked,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setAllPost(data);
  };

  const handleSave = (name: any) => {
    const data = allPost?.map(item => {
      if (item.id === name) {
        return {
          ...item,
          isSaved: !item.isSaved,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setAllPost(data);
  };

  return (
    <Fragment>
      <ScrollView>
        {allPost.map((item: any, index: any) => {
          const attachments: any = item.attachments;
          const postItem = item;
          return (
            <View key={item.id} style={styles.post}>
              <View style={[styles.sliderDivider, styles.divider]} />
              <View
                style={
                  item?.id == postId
                    ? styles.postOpacityOnSlide
                    : styles.postOpacity
                }>
                <View style={[styles.feedsHeader, styles.alignmentContainer]}>
                  <View
                    style={[
                      styles.profileImageContainer,
                      styles.alignmentContainer,
                    ]}>
                    <Image
                      source={{
                        uri: item.profileImage,
                      }}
                      style={styles.profileImage}
                    />
                    <TouchableOpacity>
                      <CustomText
                        style={[styles.profileName, styles.textFontSize]}>
                        {item?.profileName?.length >= 10
                          ? item?.profileName.slice(0, 10) + '...'
                          : item?.profileName}
                      </CustomText>
                    </TouchableOpacity>
                    {item.isFollowed ? (
                      <TouchableOpacity>
                        <CustomText
                          style={[styles.followText, styles.textFontSize]}>
                          {strings.follow}
                        </CustomText>
                      </TouchableOpacity>
                    ) : null}
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setPostMenuId(item.id);
                    }}>
                    <Image
                      source={MediaAssets.ic_more_options}
                      style={styles.moreOptionsIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={[styles.postImageContainer, styles.contentContainer]}>
                  <SwiperFlatList
                    nestedScrollEnabled={true}
                    showPagination={item?.attachments.length > 1 ? true : false}
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
                          sliderPosition={10}
                          postId={postId}
                          postItem={postItem}
                        />
                      );
                    }}
                  />
                </View>

                <View style={styles.captionContainer}>
                  <CustomText style={styles.projectName}>
                    {item.projectName}
                  </CustomText>
                  <CustomText style={styles.postCaption}>
                    {item.id === postCaptionId
                      ? item.caption
                      : item.caption.substr(0, 50)}
                    {item.id !== postCaptionId ? (
                      <CustomText
                        style={styles.moreText}
                        onPress={() => {
                          setPostCaptionId(item.id);
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
                <PostActions
                  item={item}
                  handleAdmire={handleAdmire}
                  noSaveIcon={false}
                  handleSave={handleSave}
                  toggleSharePostSheet={toggleSharePostSheet}
                  toggleFollowAdmirations={toggleFollowAdmirations}
                />
              </View>

              {item.id === postMenuId ? (
                <MenuOptions
                  setPostMenuId={setPostMenuId}
                  profileName={item.profileName}
                />
              ) : null}
            </View>
          );
        })}

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
      </ScrollView>
    </Fragment>
  );
};
