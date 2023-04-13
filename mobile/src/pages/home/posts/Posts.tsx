import {View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import postStyles from './Posts.Style';
import MediaAssets from '../../../assets';
import {post} from '../../../json/postJson';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from '../slider/SliderItem.Style';
import FeedsMediaItem from './feeds-media-item/FeedsMediaItem';
import CustomText from '../../../common-components/custom-text/CustomText';
import TrendingProjects from './trending-projects-events/TrendingProjects';
import PostActions from './post-actions/PostActions';
import InterestBar from '../../../common-components/interest-bar/InterestBar';
import {strings} from '@sekeron/domain';
import SharePostList from '../share-post-bottom-sheet/SharePostBottomSheet';
import AdmirationsList from '../admirations-bottom-sheet/AdmirationsBottomSheet';
import MenuOptions from '../../../common-components/menu/Menu';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 60;
const sliderWidth = width / 2;

const Posts = () => {
  const navigation = useNavigation<any>();
  const [sliderPosition, setSliderPosition] = useState<any>(sliderWidth);
  const [postId, setPostId] = useState<any>(null);
  const [postCaptionId, setPostCaptionId] = useState(null);
  const [postMenuId, setPostMenuId] = useState(null);

  const [allPost, setAllPost] = useState<any>(post);
  const [sharePost, setSharePost] = useState(false);
  const [followAdmirations, setFollowAdmirations] = useState(false);

  const toggleSharePostSheet = () => {
    setSharePost(!sharePost);
  };

  const toggleFollowAdmirations = () => {
    setFollowAdmirations(!followAdmirations);
  };

  const handleSetPostId = (postId: any) => {
    setPostId(postId);
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

  const handlePostProfileView = () => {
    navigation.navigate(routes.profile, {
      screen: 'profile',
      profileId: 86, // dummy number
    });
  };

  return (
    <View
      style={postStyles.feedsContainer}
      onTouchStart={() => {
        setPostMenuId(null);
      }}>
      {allPost.map((item: any, index: any) => {
        const attachments: any = item.attachments;
        const postItem = item;
        const trendingProjects: any = item.trendingProjects;
        const events: any = item.events;
        return (
          <View key={item.id} style={postStyles.post}>
            <View style={[postStyles.sliderDivider, postStyles.divider]} />
            <View
              style={
                item?.id == postId
                  ? postStyles.postOpacityOnSlide
                  : postStyles.postOpacity
              }>
              <View
                style={[postStyles.feedsHeader, postStyles.alignmentContainer]}>
                <TouchableOpacity
                  onPress={() => {
                    handlePostProfileView();
                  }}
                  style={[
                    postStyles.profileImageContainer,
                    postStyles.alignmentContainer,
                  ]}>
                  <Image
                    source={{
                      uri: item.profileImage,
                    }}
                    style={postStyles.profileImage}
                  />
                  <TouchableOpacity>
                    <CustomText
                      style={[postStyles.profileName, postStyles.textFontSize]}>
                      {item?.profileName?.length >= 10
                        ? item?.profileName.slice(0, 10) + '...'
                        : item?.profileName}
                    </CustomText>
                  </TouchableOpacity>
                  {item.isFollowed ? (
                    <TouchableOpacity>
                      <CustomText
                        style={[
                          postStyles.followText,
                          postStyles.textFontSize,
                        ]}>
                        {strings.follow}
                      </CustomText>
                    </TouchableOpacity>
                  ) : null}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setPostMenuId(item.id);
                  }}>
                  <Image
                    source={MediaAssets.ic_more_options}
                    style={postStyles.moreOptionsIcon}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  postStyles.postImageContainer,
                  postStyles.contentContainer,
                ]}>
                <SwiperFlatList
                  showPagination={item?.attachments.length > 1 ? true : false}
                  contentContainerStyle={[
                    postStyles.swiperContentContainerStyle,
                    postStyles.contentContainer,
                  ]}
                  paginationStyle={postStyles.pagnationStyle}
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
                        sliderPosition={sliderPosition}
                        postId={postId}
                        postItem={postItem}
                      />
                    );
                  }}
                />
              </View>

              <View style={postStyles.captionContainer}>
                <CustomText style={postStyles.projectName}>
                  {item.projectName}
                </CustomText>
                <CustomText style={postStyles.postCaption}>
                  {item.id === postCaptionId
                    ? item.caption
                    : item.caption.substr(0, 50)}
                  {item.id !== postCaptionId ? (
                    <CustomText
                      style={postStyles.moreText}
                      onPress={() => {
                        setPostCaptionId(item.id);
                      }}>
                      {strings.more}
                    </CustomText>
                  ) : (
                    <CustomText
                      style={postStyles.moreText}
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
            <View style={[postStyles.postDivider, postStyles.divider]} />
            {item?.isFollowed ? (
              <View style={postStyles.interestBar}>
                <InterestBar
                  setSliderPosition={setSliderPosition}
                  item={item}
                  handleSetPostId={handleSetPostId}
                  postId={postId}
                  sliderPosition={sliderPosition}
                />
              </View>
            ) : null}
            <View style={[postStyles.postDivider, postStyles.divider]} />
            <TrendingProjects
              item={item}
              events={events}
              trendingProjects={trendingProjects}
            />
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
    </View>
  );
};

export default Posts;
