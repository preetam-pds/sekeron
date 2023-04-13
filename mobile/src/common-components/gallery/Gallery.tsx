import { useNavigation } from '@react-navigation/native';
import { MediaTypeEum } from '@sekeron/domain';
import React, { memo } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { routes } from '../../navigation/route-names/RouteName';
import { styles } from './Gallery.Style';
import { useGallery } from './UseGalleryHook';


const Gallery = (props: any) => {
  const {handleImageClick, uri , icon, assetType} = props;
  const {
    photos,
    loadNextPagePictures,
    isLoading,
    isLoadingNextPage,
    isReloading,
    hasNextPage,
  } = useGallery({ pageSize: 8, assetType: assetType});

  const navigation : any = useNavigation();

  const handleEndReached = () => {
    if (!hasNextPage) {
      return;
    }
    loadNextPagePictures()
  }

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  const handleTakePictureOrVideo = () => {
    const options = assetType === 'Videos' ? {navigateBack: routes.videos, mediaType: MediaTypeEum.video } : {navigateBack: routes.images, mediaType:'photo'}
    navigation.navigate(routes.cameraScreen, options)
  }

  const getImageSelectedImageNumber = (imageuri) => {
    if (uri?.includes(imageuri)) {
      return (
        <View style={styles.selectedNumberContainer}>
          <Text style={styles.selectedNumberText}>{uri.indexOf(imageuri) + 1}</Text>
      </View>)
    } else {
      return null
    }
  }

  return (
    <View>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            handleEndReached();
          }
        }}
        scrollEventThrottle={400}
      >
        <View
          style={styles.imageGridContainer}>
          <TouchableOpacity onPress={() => handleTakePictureOrVideo()}>
            <View
              style={styles.cameraIconContainer}>
              <Image style={assetType === 'Videos' ? styles.videoIcon:  styles.cameraIcon} source={icon} />
            </View>
          </TouchableOpacity>
          {photos &&
            photos.map((photo, i) => {
              return (
                <TouchableOpacity key={i} onPress = { () => handleImageClick(photo,assetType)}>
                  <View>
                    {getImageSelectedImageNumber(photo.node.image.uri)}
                    <Image
                      style={uri?.includes(photo.node.image.uri) ? {...styles.images, ...styles.addBorder} : styles.images }
                      source={{ uri: photo.node.image.uri }}
                    />
                </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>

    </View>
  );
};

export default memo(Gallery);


