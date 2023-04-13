import {CreatePostRedux, MediaTypeEum} from '@sekeron/domain';
import React, {Fragment, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MediaAssets from '../../assets';
import {routes} from '../../navigation/route-names/RouteName';
import styles from './CreatePostTabBar.Style';

const CreatePostTabBar = props => {
  const {state, navigation, setRouteName} = props;
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>    
     dispatch(CreatePostRedux.actions.setCreatePostState(data))
  });
  const {setCreatePostState} = actionDispatch(useDispatch());
  const createPostState = useSelector((state: any) => state.CreatePostRedux);

  useEffect(()=>{
    const data = {
      key: 'routeName',
      value: '',
    };

    setCreatePostState(data);
  },[])

  const getImageSource = (routeName, isFocused) => {
    switch (routeName) {
      case routes.images: {
        if (isFocused) {
          return MediaAssets.ic_add_photo;
        } else {
          return MediaAssets.ic_add_photo_not_selected;
        }
      }
      case routes.audios: {
        if (isFocused) {
          return MediaAssets.ic_audio_post;
        } else {
          return MediaAssets.ic_audio_post_not_selected;
        }
      }
      case routes.videos: {
        if (isFocused) {
          return MediaAssets.ic_video_post;
        } else {
          return MediaAssets.ic_video_post_not_selected;
        }
      }
      case routes.texts: {
        if (isFocused) {
          return MediaAssets.ic_text_post;
        } else {
          return MediaAssets.ic_text_post_not_selected;
        }
      }
      default:
    }
  };

  const getPostsLength = routeName => {
    switch (routeName) {
      case routes.images: {
        return getImagesLength();
      }
      case routes.audios: {
        return getAudiosLength();
      }
      case routes.videos: {
        return getVideosLength();
      }
      case routes.texts: {
        return getTextsLength();
      }
      default:
    }
  };

  const renderSelectedPosts = value => {
    return (
      <View style={styles.postLengthContainerIcon}>
        <Text style={styles.postLengthContainerIconText}>{value}</Text>
      </View>
    );
  };

  const getImagesLength = () => {
    const data = createPostState.postDetails.mediaContent.filter(
      media => media.type === MediaTypeEum.image,
    );
    return data.length > 0 ? renderSelectedPosts(data.length) : null;
  };

  const getAudiosLength = () => {
    const data = createPostState.postDetails.mediaContent.filter(
      media => media.type === MediaTypeEum.audio,
    );
    return data.length > 0 ? renderSelectedPosts(data.length) : null;
  };

  const getVideosLength = () => {
    const data = createPostState.postDetails.mediaContent.filter(
      media => media.type === MediaTypeEum.video,
    );
    return data.length > 0 ? renderSelectedPosts(data.length) : null;
  };

  const getTextsLength = () => {
    const data = createPostState.postDetails.mediaContent.filter(
      media => media.type === MediaTypeEum.text,
    );
    return data.length > 0 ? renderSelectedPosts(data.length) : null;
  };

  const onPress = (routeName:any, key:any, isFocused:any) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
      setRouteName(routeName);
    }
      const data = {
        key: 'routeName',
        value: routeName,
      };

      setCreatePostState(data);
  };

  return (
    <View style={styles.createPostTabBar}>
      {state.routes.map((route, index) => {
        const isFocused = index === state.index;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(route.name, route.key, isFocused)}>
            {createPostState.postDetails.mediaContent.length > 0 ? (
              <Fragment>{getPostsLength(route.name)}</Fragment>
            ) : null} 
            <Image
              style={
                route.name === routes.images || route.name === routes.audios
                  ? styles.tabIconsOne
                  : styles.tabIconsTwo
              }
              source={getImageSource(route.name, isFocused)}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CreatePostTabBar;
