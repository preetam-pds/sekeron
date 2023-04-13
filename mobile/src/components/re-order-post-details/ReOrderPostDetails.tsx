import {useNavigation} from '@react-navigation/native';
import {CreatePostRedux, MediaTypeEum, strings} from '@sekeron/domain';
import React, {useState} from 'react';
import {Fragment} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {Image} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import MediaAssets from '../../assets';
import CancelDialog from '../../common-components/cancel-dialog/CancelDialog';
import HeaderWithBackButton from '../../common-components/header-with-back-button/HeaderWithBackButton';
import {routes} from '../../navigation/route-names/RouteName';
import AudioPlayerComponent from '../audio-player/AudioPlayer';
import styles from './ReOrderPostDetails.Style';
import uuid from 'react-native-uuid';

const ReOrderPostDetails = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isCrossClicked, setIsCrossClicked] = useState(false);

  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });

  const navigation: any = useNavigation();

  const {setCreatePostState} = actionDispatch(useDispatch());
  const createPostState = useSelector((state: any) => state.CreatePostRedux);
  const [data, setData] = useState(createPostState.postDetails.mediaContent);
  const [uri, setUri] = useState(null);

  const handleBackButtonClick = () => {
    navigation.navigate(routes.addAdditionalPostDetails);
  };

  const handleSave = () => {
    let postDetails;
    postDetails = {
      ...createPostState.postDetails,
      mediaContent: data,
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });
    navigation.navigate(routes.previewPost);
  };

  const handleCrossClick = () => {
    const newData = [...data];
    let index = newData.findIndex(content => content['publicUrl'] === uri);
    newData.splice(index, 1);
    setData(newData);
    setIsModalOpened(false);
  };

  const isModalOpenHandler = value => {
    setIsModalOpened(value);
  };

  const getReorderingHeaderDetails = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsModalOpened(true);
          }}>
          <Text style={styles.discardText}>{strings.discard}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSave()}>
          <Text style={styles.saveText}>{strings.save}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({item, drag, isActive}: RenderItemParams<any>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={isActive}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Image style={styles.dragIcon} source={MediaAssets.ic_drag} />
              {item.type === MediaTypeEum.audio ? (
                <View style={{width: '73%'}}>
                  <AudioPlayerComponent
                    playerContainerStyle={styles.playerContainerStyle}
                    playerTrackStyle={styles.playerTrackStyle}
                    height={100}
                    media={item}
                    setReorderMedia={(media) => {
                      setData(media)
                    }}
                    isReOrder={true}
                    showMuteicon={false}
                  />
                </View>
              ) : null}
              {item.type === MediaTypeEum.image || item.type === MediaTypeEum.video? (
                <Image
                  key={item?.id}
                  style={styles.mediaContent}
                  source={{uri: item.publicUrl}}
                />
              ) : null}
              {item.type === MediaTypeEum.text ? (
                <AutoHeightWebView
                  key={item?.id}
                  style={[styles.mediaContent, styles.webViewContent]}
                  source={{
                    html: item.text,
                  }}
                  androidLayerType="hardware"
                  scalesPageToFit={true}
                  viewportContent={'width=device-width, user-scalable=no'}
                />
              ) : null}
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsCrossClicked(true);
                setIsModalOpened(true);
                setUri(item.publicUrl);
              }}>
              <Image
                style={styles.crossIcon}
                source={MediaAssets.ic_red_cross}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <Fragment>
      <HeaderWithBackButton
        customName={strings.reorderingContents}
        otherDetails={getReorderingHeaderDetails()}
        handleBackButtonClick={handleBackButtonClick}
      />
      <DraggableFlatList
        data={data}
        onDragEnd={({data}) => setData(data)}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
      />
      <CancelDialog
        cancelTitle={
          isCrossClicked ? strings.deleteItem : strings.discardChanges
        }
        cancelButtonTitle={isCrossClicked ? strings.delete : strings.discard}
        text={
          <Text style={styles.cancelText}>{strings.youMightLoseChanges}</Text>
        }
        icon={MediaAssets.ic_diamond_shape}
        shouldOpen={isModalOpened}
        isModalOpenHandler={() => {
          isModalOpenHandler;
        }}
        cancelButtonClick={() => {
          isCrossClicked
            ? handleCrossClick()
            : navigation.navigate(routes.addAdditionalPostDetails);
        }}
        stayButtonClick={() => {
          setIsModalOpened(false);
        }}
      />
    </Fragment>
  );
};

export default ReOrderPostDetails;
