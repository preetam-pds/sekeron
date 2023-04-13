import React, {useEffect, Fragment, useCallback, useState} from 'react';
import {
  View,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Gallery from '../../../common-components/gallery/Gallery';
import styles from './CreatePostScreen.Style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreatePostTabBar from '../../../components/create-post-tab-bar/CreatePostTabBar';
import SelectedCreatePost from '../../../components/selected-create-post/SelectedCreatePost';
import MediaAssets from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {CreatePostRedux, MediaTypeEum, PlatformEnum} from '@sekeron/domain';
import {routes} from '../../../navigation/route-names/RouteName';
import CreatePostAudio from '../../../components/create-post-audio-screen/CreatePostAudio';
import uuid from 'react-native-uuid';

const CreatePostScreen = () => {
  const [routeName, setRouteName] = useState();
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });

  const {setCreatePostState} = actionDispatch(useDispatch());
  const createPostState = useSelector((state: any) => state.CreatePostRedux);

  const clearClearPosts = () => {
    let postDetails = {
      title: '',
      description: '',
      backgroundColor: 'rgba(47, 119, 150, 0.7)',
      cardBackgroundColor: 'rgba(47, 119, 150, 0.7)',
      mediaContent: [],
      timestamp: [],
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });
  };

  useEffect(() => {
    checkCameraPermission();
    clearClearPosts();
  }, []);

  const Tab = createMaterialTopTabNavigator();

  const requestExternalWritePermission = async () => {
    if (Platform.OS === PlatformEnum.android) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err: any) {
        console.warn(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  async function checkCameraPermission() {
    if (
      Platform.OS === PlatformEnum.android &&
      !(await requestExternalWritePermission())
    ) {
      return;
    }
  }

  const handleMediaUpload = (mediaContent: any) => {
    let postDetails;
    postDetails = {
      ...createPostState.postDetails,
      mediaContent,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });
  };
  const toggleImageSelection = useCallback(
    (uri, assetType, isSelected) => {
     const mediaContent = createPostState.postDetails.mediaContent.map(
       (item: any) => {
         return {...item, isPlaying: false};
       },
     );
      if (isSelected) {
        mediaContent.push({
          type:
            assetType === 'Photos' ? MediaTypeEum.image : MediaTypeEum.video,
          publicUrl: uri,
          id: uuid.v4(),
          isPlaying: false,
        });
      } else {
        let index = mediaContent.findIndex(
          content => content['publicUrl'] === uri,
        );
        mediaContent.splice(index, 1);
      }
      handleMediaUpload(mediaContent);
    },
    [createPostState],
  );

  const handleImageClick = (photo, assetType) => {
    let data: any;
    if (assetType === 'Photos') {
      data = [...getPhotosUri()];
    } else {
      data = [...getVideosUri()];
    }
    if (data.includes(photo.node.image.uri)) {
      toggleImageSelection(photo.node.image.uri, assetType, false);
    } else {
      toggleImageSelection(photo.node.image.uri, assetType, true);
    }
  };

  const getPhotosUri = () => {
    const uri: any = [];
    createPostState.postDetails.mediaContent.map(content => {
      if (content.type === MediaTypeEum.image) {
        uri.push(content.publicUrl);
      }
    });
    return uri || [];
  };

  const getVideosUri = () => {
    const uri: any = [];
    createPostState.postDetails.mediaContent.map(content => {
      if (content.type === MediaTypeEum.video) {
        uri.push(content.publicUrl);
      }
    });
    return uri;
  };

  const getAudioUri = () => {
    const uri: any = [];
    createPostState.postDetails.mediaContent.map(content => {
      if (content.type === MediaTypeEum.audio) {
        uri.push(content.publicUrl);
      }
    });
    return uri;
  };

  const toggleAudioSelection = useCallback(
    (uri, isSelected) => {
      const mediaContent = [...createPostState.postDetails.mediaContent];
      if (isSelected) {
        mediaContent.push({
          type: MediaTypeEum.audio,
          publicUrl: uri,
          isPlaying: false,
          id: uuid.v4(),
          playTime: 0,
        });
      } else {
        let index = mediaContent.findIndex(
          content => content['publicUrl'] === uri,
        );
        mediaContent.splice(index, 1);
      }
      handleMediaUpload(mediaContent);
    },
    [createPostState],
  );

  const handleAudioClick = path => {
    const data = [...getAudioUri()];
    if (data.includes(path)) {
      toggleAudioSelection(path, false);
    } else {
      toggleAudioSelection(path, true);
    }
  };

  const handleSetRouteName = name => {
    setRouteName(name);
  };

  return (
    <Fragment>
      <SelectedCreatePost
        isScroll={true}
        routeName={routeName}
        scrollToEnd={true}
      />

      <Tab.Navigator
        tabBar={props => (
          <CreatePostTabBar {...props} setRouteName={handleSetRouteName} />
        )}>
        <Tab.Screen
          name={routes.images}
          children={() => (
            <View style={styles.accessGallery}>
              <Gallery
                handleImageClick={handleImageClick}
                timestamp={createPostState.postDetails.timestamp}
                uri={getPhotosUri()}
                icon={MediaAssets.ic_add_photo}
                assetType="Photos"
              />
            </View>
          )}
        />

        <Tab.Screen
          name={routes.audios}
          children={() => (
            <View>
              <CreatePostAudio
                uri={getAudioUri()}
                handleAudioClick={handleAudioClick}
              />
            </View>
          )}
        />

        <Tab.Screen
          name={routes.videos}
          children={() => (
            <View>
              <View style={styles.accessGallery}>
                <Gallery
                  handleImageClick={handleImageClick}
                  timestamp={createPostState.postDetails.timestamp}
                  uri={getVideosUri()}
                  icon={MediaAssets.ic_video_post}
                  assetType="Videos"
                  // strings
                />
              </View>
            </View>
          )}
        />

        <Tab.Screen name={routes.texts} children={() => <View></View>} />
      </Tab.Navigator>
    </Fragment>
  );
};

export default CreatePostScreen;
