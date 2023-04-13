import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../common-components/custom-text/CustomText';
import {strings} from '@sekeron/domain';
import {viewPost} from '../../../json/viewPostJson';
import FeedsMediaItem from '../posts/feeds-media-item/FeedsMediaItem';
import styles from './ViewPost.Style';
import PostActions from '../posts/post-actions/PostActions';
import SharePostList from '../share-post-bottom-sheet/SharePostBottomSheet';
import AdmirationsList from '../admirations-bottom-sheet/AdmirationsBottomSheet';
import ViewPostHeaderComponent from './ViewPostHeaderComponent';

const windowWidth = Dimensions.get('window').width;

const ViewPost = () => {
  const [viewPostData, setViewPostData] = useState<any>(viewPost[0]);
  const [sharePost, setSharePost] = useState(false);
  const [followAdmirations, setFollowAdmirations] = useState(false);

  const toggleSharePostSheet = () => {
    setSharePost(!sharePost);
  };

  const toggleFollowAdmirations = () => {
    setFollowAdmirations(!followAdmirations);
  };

  const handleViewPostAdmire = () => {
    setViewPostData({...viewPostData, isLiked: !viewPostData?.isLiked});
  };

  const handleViewPostSave = () => {
    setViewPostData({...viewPostData, isSaved: !viewPostData?.isSaved});
  };

  return (
    <View>
      <ViewPostHeaderComponent noTitle={true} isOptionsIcon={true} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={{
              uri: viewPostData.profileImage,
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity>
            <CustomText style={[styles.profileName, styles.textMargin]}>
              {viewPostData?.profileName?.length >= 10
                ? viewPostData?.profileName.slice(0, 10) + '...'
                : viewPostData?.profileName}
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomText
              style={[styles.followText, styles.textMargin, styles.textSize]}>
              {strings.follow}
            </CustomText>
          </TouchableOpacity>
          <CustomText
            style={[styles.postedDuration, styles.textMargin, styles.textSize]}>
            {viewPostData.postedDuration}
          </CustomText>
        </View>

        <CustomText style={styles.caption}>
          {viewPostData.postCaption}
        </CustomText>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          {viewPostData.postedMedia.map((item: any, index: any) => {
            return (
              <View key={index}>
                <FeedsMediaItem item={item} windowWidth={windowWidth} />
              </View>
            );
          })}
          <PostActions
            isOptionsIcon={true}
            item={viewPostData}
            toggleSharePostSheet={toggleSharePostSheet}
            toggleFollowAdmirations={toggleFollowAdmirations}
            handleAdmire={handleViewPostAdmire}
            handleSave={handleViewPostSave}
          />
        </ScrollView>
        {sharePost && (
          <SharePostList
            sharePost={sharePost}
            setSharePost={setSharePost}
            toggleSharePostSheet={toggleSharePostSheet}
          />
        )}
        {followAdmirations && (
          <AdmirationsList
            followAdmirations={followAdmirations}
            setFollowAdmirations={setFollowAdmirations}
            toggleFollowAdmirations={toggleFollowAdmirations}
          />
        )}
      </View>
    </View>
  );
};

export default ViewPost;
