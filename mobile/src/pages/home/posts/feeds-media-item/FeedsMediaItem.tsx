import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import postStyles from '../Posts.Style';
import {MediaTypeEum, strings} from '@sekeron/domain';
import VideoPlayerComponent from '../../../../common-components/video-player/VideoPlayer';
import CustomText from '../../../../common-components/custom-text/CustomText';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../../navigation/route-names/RouteName';

const FeedsMediaItem = (props: any) => {
  const {
    item,
    windowWidth,
    attchments,
    postItem,
    sliderWidth,
    sliderPosition,
    postId,
  } = props;
  const mediaHeight = item?.height * (windowWidth / item?.width);
  const navigation: any = useNavigation();
  const [isVideoPaused, setIsVideoPaused] = useState(true);

  const onPressViewPost = () => {
    navigation.navigate(routes.viewPost);
  };

  return (
    <Fragment>
      {item.type === MediaTypeEum.image ? (
        // aspect ratio is calculated by divding the devicewidth with imagewidth and then multiplied with the height of the image
        <View style={postStyles.contentContainer}>
          <Image
            style={[
              postStyles.mediaWidth,
              postStyles.imageFitMode,
              {
                height: mediaHeight > 600 ? 600 : mediaHeight,
              },
            ]}
            source={{
              uri: item.post,
            }}
          />
        </View>
      ) : null}

      {item.type === MediaTypeEum.video ? (
        <Fragment>
          <VideoPlayerComponent
            url={item.post}
            isPlaying={undefined}
            id={undefined}
            isSelectedCreatePost={undefined}
            isVideoPaused={isVideoPaused}
            setIsVideoPaused={setIsVideoPaused}
            mediaHeight={mediaHeight}
          />
        </Fragment>
      ) : null}

      {attchments?.length > 1 ? (
        <TouchableOpacity
          style={[postStyles.viewPostBtn, postStyles.contentContainer]}
          onPress={() => {
            onPressViewPost();
          }}>
          <CustomText style={postStyles.viewPostText}>
            {strings.viewPost}
          </CustomText>
        </TouchableOpacity>
      ) : null}

      {sliderPosition < sliderWidth - 1 && postItem.id === postId ? (
        <View style={[postStyles.showPost, postStyles.contentContainer]}>
          <CustomText
            style={[
              postStyles.showPostText,
              {
                top: mediaHeight / 2 - 30,
              },
            ]}>
            {strings.showLessPosts}
          </CustomText>
        </View>
      ) : sliderPosition > sliderWidth + 1 && postItem.id === postId ? (
        <View style={[postStyles.showPost, postStyles.contentContainer]}>
          <CustomText
            style={[
              postStyles.showPostText,
              {
                top: mediaHeight / 2 - 30,
              },
            ]}>
            {strings.showMorePosts}
          </CustomText>
        </View>
      ) : null}
    </Fragment>
  );
};

export default FeedsMediaItem;
