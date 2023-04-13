import {CreatePostRedux, MediaTypeEum, strings} from '@sekeron/domain';
import React, {Fragment, memo, useCallback, useRef, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MediaAssets from '../../assets';
import styles from './SelectedCreatePost.Style';
import VideoPlayerComponent from '../../common-components/video-player/VideoPlayer';
import AudioPlayerComponent from '../audio-player/AudioPlayer';
import AudioRecorderComponent from '../audio-recorder/AudioRecorder';
import {routes} from '../../navigation/route-names/RouteName';
import {useRoute} from '@react-navigation/native';
import CustomText from '../../common-components/custom-text/CustomText';
import TextEditor from '../text-editor/TextEditor';
import uuid from 'react-native-uuid';
import AutoHeightWebView from 'react-native-autoheight-webview';

const SelectedCreatePost = (props: any) => {
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });
  const {setCreatePostState} = actionDispatch(useDispatch());
  const createPostState = useSelector((state: any) => state.CreatePostRedux);
  const scrollViewRef: any = useRef();
  const route: any = useRoute();
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(true);

  const handleEditedText = useCallback(
    (text: any, height: any) => {
      const mediaContent = [...createPostState.postDetails.mediaContent];
      mediaContent.push({
        type: MediaTypeEum.text,
        text: text,
        height: height,
        id: uuid.v4(),
      });
      handleMediaUpload(mediaContent);
      setShowTextEditor(false);
    },
    [createPostState],
  );

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

  const renderPosts = (media, index) => {
    switch (media.type) {
      case MediaTypeEum.image:
        return (
          <Fragment key={index}>
            <Image
              key={index}
              style={styles.selectedImages}
              source={{uri: media.publicUrl}}
            />
          </Fragment>
        );

      case MediaTypeEum.audio:
        return (
          <View key={index} style={{marginVertical: 5}}>
            <AudioPlayerComponent
              playerContainerStyle={styles.playerContainerStyle}
              playerTrackStyle={styles.playerTrackStyle}
              showMuteicon={true}
              url={media.publicUrl}
              media={media}
              height={180}
            />
          </View>
        );

      case MediaTypeEum.video:
        return (
          <View key={index}>
            <VideoPlayerComponent
              url={media?.publicUrl}
              isPlaying={media.isPlaying}
              id={media?.id}
              isSelectedCreatePost={true}
              isVideoPaused={isVideoPaused}
              setIsVideoPaused={setIsVideoPaused}
              mediaHeight={300}
            />
          </View>
        );
      case MediaTypeEum.text:
        return (
          <AutoHeightWebView
            key={index}
            style={[
              styles.webViewContainerStyle,
              {height: media?.height > 300 ? media?.height * 0.9 : 300},
            ]}
            source={{
              html: media.text,
            }}
            androidLayerType="hardware"
            scalesPageToFit={true}
            viewportContent={'width=device-width, user-scalable=no'}
          />
        );

      default:
        return null;
    }
  };

  const renderSelectedPosts = () => {
    if (props.isScroll) {
      return (
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollViewContainer}
          onContentSizeChange={() => {
            if (props.scrollToEnd) {
              return scrollViewRef.current.scrollToEnd({animated: true});
            }
          }}>
          <View style={styles.selectedMediaContainer}>
            {createPostState.postDetails.mediaContent.map((media, index) =>
              renderPosts(media, index),
            )}
          </View>
          {createPostState.routeName === routes.texts && showTextEditor ? (
            <TextEditor handleEditedText={handleEditedText} />
          ) : null}
        </ScrollView>
      );
    } else {
      return (
        <View>
          {createPostState.postDetails.mediaContent.map((media, index) =>
            renderPosts(media, index),
          )}
        </View>
      );
    }
  };
  return (
    <View style={props.isScroll ? styles.createPostTextContainer : null}>
      {createPostState.postDetails.mediaContent.length > 0 ||
      (createPostState.routeName === routes.texts && showTextEditor) ? (
        renderSelectedPosts()
      ) : (
        <View
          style={[
            styles.createPostViewContainer,
            {marginTop: props.routeName === routes.audios ? 0 : 60},
          ]}>
          <Image source={MediaAssets.ic_combined_shape} />
          <Text style={styles.createAPostText}>{strings.createAPost}</Text>
          <Text style={styles.uploadMediaText}>
            {strings.uploadYourDesires}
          </Text>
        </View>
      )}
      {props.routeName === routes.audios ? <AudioRecorderComponent /> : null}
      {createPostState.routeName === routes.texts &&
      !showTextEditor &&
      route.name !== routes.addAdditionalPostDetails &&
      route.name !== routes.previewPost ? (
        <TouchableOpacity
          onPress={() => {
            setShowTextEditor(true);
          }}>
          <CustomText style={styles.addNewTextCanvas}>
            {strings.addNewTextCanvas}
          </CustomText>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default memo(SelectedCreatePost);
